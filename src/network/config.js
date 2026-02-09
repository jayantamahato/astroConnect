/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

// Environment-based API URL
const API_URL = import.meta.env.VITE_API_URL || 'https://api.astroconnect.com/v1';

export const API_CONFIG = {
    baseURL: API_URL,
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
    retryDelay: 1000, // 1 second
};

// Token storage keys
export const STORAGE_KEYS = {
    ACCESS_TOKEN: 'astro_access_token',
    REFRESH_TOKEN: 'astro_refresh_token',
    USER_DATA: 'astro_user_data',
};

// HTTP Status codes
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
};

// API Endpoints
export const ENDPOINTS = {
    // Auth
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
        REFRESH_TOKEN: '/auth/refresh',
        VERIFY_OTP: '/auth/verify-otp',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    // User
    USER: {
        PROFILE: '/user/profile',
        UPDATE_PROFILE: '/user/profile',
        WALLET: '/user/wallet',
        TRANSACTIONS: '/user/transactions',
        FAVORITES: '/user/favorites',
        WAITLIST: '/user/waitlist',
    },
    // Astrologers
    ASTROLOGERS: {
        LIST: '/astrologers',
        DETAILS: (id) => `/astrologers/${id}`,
        REVIEWS: (id) => `/astrologers/${id}/reviews`,
        AVAILABILITY: (id) => `/astrologers/${id}/availability`,
    },
    // Consultations
    CONSULTATIONS: {
        START_CHAT: '/consultations/chat',
        START_CALL: '/consultations/call',
        END_SESSION: (id) => `/consultations/${id}/end`,
        HISTORY: '/consultations/history',
    },
    // Horoscope & Kundali
    SERVICES: {
        HOROSCOPE: '/services/horoscope',
        KUNDALI: '/services/kundali',
        KUNDALI_MATCH: '/services/kundali-match',
    },
    // Content
    CONTENT: {
        BLOGS: '/content/blogs',
        BLOG_DETAILS: (id) => `/content/blogs/${id}`,
        SHORTS: '/content/shorts',
        LIVE_STREAMS: '/content/live',
    },
};
