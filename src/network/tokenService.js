/**
 * Token Service
 * Handles auth token storage and retrieval
 */

import { STORAGE_KEYS } from './config';

class TokenService {
    /**
     * Get access token from storage
     */
    getAccessToken() {
        return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    }

    /**
     * Get refresh token from storage
     */
    getRefreshToken() {
        return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    }

    /**
     * Store tokens in localStorage
     */
    setTokens({ accessToken, refreshToken }) {
        if (accessToken) {
            localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
        }
        if (refreshToken) {
            localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
        }
    }

    /**
     * Clear all tokens (logout)
     */
    clearTokens() {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        const token = this.getAccessToken();
        if (!token) return false;

        // Check if token is expired (basic JWT check)
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const expiry = payload.exp * 1000; // Convert to milliseconds
            return Date.now() < expiry;
        } catch {
            return false;
        }
    }

    /**
     * Get user data from storage
     */
    getUserData() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    }

    /**
     * Store user data
     */
    setUserData(userData) {
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
    }
}

export const tokenService = new TokenService();
export default tokenService;
