import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
// Future features can be added here
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        // counter: counterReducer,
    },
    // Customize middleware if needed
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Useful if dealing with non-serializable data (like complex objects)
        }),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in dev
});

export default store;
