import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { colorScheme } from './colorScheme';

const reducer = combineReducers({
    colorScheme,
});

const store = configureStore({
    reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;