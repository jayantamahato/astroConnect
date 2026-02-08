import { createSlice } from '@reduxjs/toolkit';

// Helper to get initial theme
const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light'; // Default theme
};

const initialState = {
    theme: getInitialTheme(),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            // Side effect could be handled here or in middleware/component, 
            // but updating localStorage here for simplicity is often acceptable in simple slices.
            // Ideally, effect logic belongs in middleware or a listener.
            // We will handle the DOM update logic in the component via useEffect to keep the reducer pure.
            localStorage.setItem('color-theme', state.theme);
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem('color-theme', state.theme);
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
