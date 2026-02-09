/**
 * HTTP Client - Production-Grade Axios Instance
 * Features:
 * - Auth token interceptor
 * - Automatic token refresh
 * - Request/Response logging (dev only)
 * - Retry logic with exponential backoff
 * - Request cancellation
 * - Error normalization
 */

import axios from 'axios';
import { API_CONFIG, HTTP_STATUS, ENDPOINTS } from './config';
import { tokenService } from './tokenService';

// Create axios instance with default config
const httpClient = axios.create({
    baseURL: API_CONFIG.baseURL,
    timeout: API_CONFIG.timeout,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Track if we're currently refreshing the token
let isRefreshing = false;
let failedQueue = [];

/**
 * Process the failed requests queue after token refresh
 */
const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

/**
 * Request Interceptor
 * - Adds auth token to requests
 * - Logs requests in development
 */
httpClient.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = tokenService.getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Log requests in development
        if (import.meta.env.DEV) {
            console.log(`🚀 [${config.method?.toUpperCase()}] ${config.url}`, {
                params: config.params,
                data: config.data,
            });
        }

        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * - Handles token refresh on 401
 * - Normalizes error responses
 * - Logs responses in development
 */
httpClient.interceptors.response.use(
    (response) => {
        // Log successful responses in development
        if (import.meta.env.DEV) {
            console.log(`✅ [${response.status}] ${response.config.url}`, response.data);
        }
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Log errors
        if (import.meta.env.DEV) {
            console.error(`❌ [${error.response?.status}] ${originalRequest?.url}`, error.response?.data);
        }

        // Handle 401 Unauthorized - Token refresh
        if (error.response?.status === HTTP_STATUS.UNAUTHORIZED && !originalRequest._retry) {
            if (isRefreshing) {
                // If already refreshing, queue this request
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return httpClient(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const refreshToken = tokenService.getRefreshToken();

                if (!refreshToken) {
                    throw new Error('No refresh token available');
                }

                // Attempt to refresh the token
                const response = await axios.post(
                    `${API_CONFIG.baseURL}${ENDPOINTS.AUTH.REFRESH_TOKEN}`,
                    { refreshToken }
                );

                const { accessToken, refreshToken: newRefreshToken } = response.data;

                // Store new tokens
                tokenService.setTokens({
                    accessToken,
                    refreshToken: newRefreshToken || refreshToken,
                });

                // Process queued requests
                processQueue(null, accessToken);

                // Retry original request
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return httpClient(originalRequest);
            } catch (refreshError) {
                // Token refresh failed - logout user
                processQueue(refreshError, null);
                tokenService.clearTokens();

                // Dispatch logout event for app to handle
                window.dispatchEvent(new CustomEvent('auth:logout', {
                    detail: { reason: 'token_refresh_failed' }
                }));

                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        // Normalize error response
        const normalizedError = normalizeError(error);
        return Promise.reject(normalizedError);
    }
);

/**
 * Normalize error response for consistent error handling
 */
const normalizeError = (error) => {
    const normalized = {
        message: 'An unexpected error occurred',
        status: null,
        code: null,
        errors: null,
        originalError: error,
    };

    if (error.response) {
        // Server responded with error
        normalized.status = error.response.status;
        normalized.message = error.response.data?.message || error.response.statusText;
        normalized.code = error.response.data?.code;
        normalized.errors = error.response.data?.errors;
    } else if (error.request) {
        // Request made but no response
        normalized.message = 'No response from server. Please check your connection.';
        normalized.code = 'NETWORK_ERROR';
    } else {
        // Something went wrong setting up the request
        normalized.message = error.message;
        normalized.code = 'REQUEST_SETUP_ERROR';
    }

    return normalized;
};

/**
 * Retry request with exponential backoff
 */
export const retryRequest = async (requestFn, retries = API_CONFIG.retryAttempts) => {
    for (let i = 0; i < retries; i++) {
        try {
            return await requestFn();
        } catch (error) {
            const isLastAttempt = i === retries - 1;
            const shouldRetry =
                !isLastAttempt &&
                error.status >= 500 &&
                error.code !== 'NETWORK_ERROR';

            if (!shouldRetry) {
                throw error;
            }

            // Exponential backoff
            const delay = API_CONFIG.retryDelay * Math.pow(2, i);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
};

/**
 * Create a cancellable request
 */
export const createCancellableRequest = () => {
    const controller = new AbortController();
    return {
        signal: controller.signal,
        cancel: () => controller.abort(),
    };
};

// Export the configured axios instance
export { httpClient };
export default httpClient;
