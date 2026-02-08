import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
    },
    // Customize middleware if needed
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Useful if dealing with non-serializable data (like complex objects)
        }),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in dev
});

export default store;
