import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemeName } from 'react-native';

export type ColorSchemeState = {
    colorScheme: ColorSchemeName;
};

const initialState: ColorSchemeState = {
    colorScheme: 'light',
};

const slice = createSlice({
    name: 'colorScheme',
    initialState,
    reducers: {
        setColorScheme: (state: ColorSchemeState, action: PayloadAction<ColorSchemeName>) => {
            state.colorScheme = action.payload;
        },
        toggleColorScheme: (state: ColorSchemeState) => {
            state.colorScheme = (state.colorScheme === 'light' ? 'dark' : 'light');
        },
    },
});

export const colorScheme = slice.reducer;
export const { setColorScheme, toggleColorScheme } = slice.actions;