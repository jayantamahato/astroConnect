/**
 * API Service
 * High-level API methods with proper typing and error handling
 */

import httpClient, { retryRequest, createCancellableRequest } from './httpClient';
import { ENDPOINTS } from './config';

/**
 * Generic request wrapper with retry support
 */
const request = async (method, url, data = null, options = {}) => {
    const config = {
        method,
        url,
        ...options,
    };

    if (data) {
        if (method === 'get') {
            config.params = data;
        } else {
            config.data = data;
        }
    }

    const response = await httpClient(config);
    return response.data;
};

/**
 * API Methods
 */
export const api = {
    // Generic methods
    get: (url, params, options) => request('get', url, params, options),
    post: (url, data, options) => request('post', url, data, options),
    put: (url, data, options) => request('put', url, data, options),
    patch: (url, data, options) => request('patch', url, data, options),
    delete: (url, options) => request('delete', url, null, options),

    // Auth endpoints
    auth: {
        login: (credentials) => request('post', ENDPOINTS.AUTH.LOGIN, credentials),
        register: (userData) => request('post', ENDPOINTS.AUTH.REGISTER, userData),
        logout: () => request('post', ENDPOINTS.AUTH.LOGOUT),
        verifyOtp: (data) => request('post', ENDPOINTS.AUTH.VERIFY_OTP, data),
        forgotPassword: (email) => request('post', ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),
        resetPassword: (data) => request('post', ENDPOINTS.AUTH.RESET_PASSWORD, data),
    },

    // User endpoints
    user: {
        getProfile: () => request('get', ENDPOINTS.USER.PROFILE),
        updateProfile: (data) => request('put', ENDPOINTS.USER.UPDATE_PROFILE, data),
        getWallet: () => request('get', ENDPOINTS.USER.WALLET),
        getTransactions: (params) => request('get', ENDPOINTS.USER.TRANSACTIONS, params),
        getFavorites: () => request('get', ENDPOINTS.USER.FAVORITES),
        addFavorite: (astrologerId) => request('post', ENDPOINTS.USER.FAVORITES, { astrologerId }),
        removeFavorite: (astrologerId) => request('delete', `${ENDPOINTS.USER.FAVORITES}/${astrologerId}`),
        getWaitlist: () => request('get', ENDPOINTS.USER.WAITLIST),
    },

    // Astrologer endpoints
    astrologers: {
        getList: (params) => request('get', ENDPOINTS.ASTROLOGERS.LIST, params),
        getDetails: (id) => request('get', ENDPOINTS.ASTROLOGERS.DETAILS(id)),
        getReviews: (id, params) => request('get', ENDPOINTS.ASTROLOGERS.REVIEWS(id), params),
        getAvailability: (id) => request('get', ENDPOINTS.ASTROLOGERS.AVAILABILITY(id)),
    },

    // Consultation endpoints
    consultations: {
        startChat: (astrologerId) => request('post', ENDPOINTS.CONSULTATIONS.START_CHAT, { astrologerId }),
        startCall: (astrologerId, type) => request('post', ENDPOINTS.CONSULTATIONS.START_CALL, { astrologerId, type }),
        endSession: (sessionId) => request('post', ENDPOINTS.CONSULTATIONS.END_SESSION(sessionId)),
        getHistory: (params) => request('get', ENDPOINTS.CONSULTATIONS.HISTORY, params),
    },

    // Services endpoints
    services: {
        getHoroscope: (params) => request('get', ENDPOINTS.SERVICES.HOROSCOPE, params),
        generateKundali: (data) => request('post', ENDPOINTS.SERVICES.KUNDALI, data),
        getKundaliMatch: (data) => request('post', ENDPOINTS.SERVICES.KUNDALI_MATCH, data),
    },

    // Content endpoints
    content: {
        getBlogs: (params) => request('get', ENDPOINTS.CONTENT.BLOGS, params),
        getBlogDetails: (id) => request('get', ENDPOINTS.CONTENT.BLOG_DETAILS(id)),
        getShorts: (params) => request('get', ENDPOINTS.CONTENT.SHORTS, params),
        getLiveStreams: () => request('get', ENDPOINTS.CONTENT.LIVE_STREAMS),
    },
};

// Export utilities
export { retryRequest, createCancellableRequest };
export default api;
