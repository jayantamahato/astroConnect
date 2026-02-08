import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoginOpen: false,
    loginStep: 'phone', // 'phone' | 'otp'
    phoneNumber: '',
    verificationId: null,
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        openLogin: (state) => {
            state.isLoginOpen = true;
            state.loginStep = 'phone';
            state.phoneNumber = '';
            state.error = null;
        },
        closeLogin: (state) => {
            state.isLoginOpen = false;
            state.loginStep = 'phone';
            state.phoneNumber = '';
            state.error = null;
        },
        setLoginStep: (state, action) => {
            state.loginStep = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.isLoginOpen = false; // Close modal on success
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const {
    openLogin,
    closeLogin,
    setLoginStep,
    setPhoneNumber,
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
