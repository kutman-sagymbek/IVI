import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { moviesApi } from "./moviesApi";
import { userApi } from "./userApi";
import user from "./userSlice";
import favoriteSlice from "./favoriteMoviesSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        [moviesApi.reducerPath]: moviesApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        user: user,
        // favorite: favoriteSlice
    })
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([moviesApi.middleware, userApi.middleware])
});

export const persistor = persistStore(store);
