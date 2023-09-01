import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            email: '',
            login: '',
        },
        favorites: [],
    },
    reducers: {
        loginAccount: (state, action) => {
            state.user = action.payload;
            state.favorites = action.payload.favorites.filter(el => !Array.isArray(el)) || []
        },
        logoutAccount: (state) => {
            state.user = {
                email: '',
                login: '',
            }
            state.favorites = []
        },
        updateFavorites(state, action) {
            const existedFavorite = state.favorites.find((el) => el === action.payload);
            let updatedFavorites = [];
            if(existedFavorite) {
                updatedFavorites = [...state.favorites.filter(el => el !== action.payload)]
            }else{
                updatedFavorites = [...state.favorites, action.payload];
                toast.success(`${state.favorites.id} добавлено в список любимых фильмов`, {
                    position: "bottom-left",
                });
            }
            state.favorites = updatedFavorites;
            if(state.user.id) {
                axios.patch(`http://localhost:8080/users/${state.user.id}`, {favorites: updatedFavorites});
            }
        },
    },
})

export default userSlice.reducer;
export const { updateFavorites, loginAccount, logoutAccount } = userSlice.actions;


