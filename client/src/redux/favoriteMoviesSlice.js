// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import axios from "axios";
//
// const favoriteSlice = createSlice({
//     name: 'favorite',
//     initialState: {
//         favoriteMovies: [],
//     },
//     reducers: {
//         addToFavorites(state, action) {
//             const itemIdToAdd = action.payload;
//
//             const existingItem = state.favoriteMovies.find(item => item.id === itemIdToAdd.id);
//
//             if (!existingItem) {
//                 state.favoriteMovies.push(itemIdToAdd);
//
//                 const user = state.user;
//
//                 if (user) {
//                     user.favorites.push(itemIdToAdd.id);
//                     axios.patch(`http://localhost:8080/users/${user.id}`, { favorites: user.favorites });
//                 }
//
//                 toast.success(`${action.payload.name} добавлено в список любимых фильмов`, {
//                     position: "bottom-left",
//                 });
//             }
//         },
//
//         removeFromFavorites(state, action) {
//             const itemIdToRemove = action.payload;
//             const updatedCartItems = state.favoriteMovies.filter(item => item.id !== itemIdToRemove.id);
//             const removedItem = state.favoriteMovies.find(item => item.id === itemIdToRemove.id);
//
//             if (removedItem) {
//                 const user = state.user;
//
//                 if (user) {
//                     user.favorites = user.favorites.filter(id => id !== itemIdToRemove.id);
//
//                     axios.patch(`http://localhost:8080/users/${user.id}`, { favorites: user.favorites });
//                 }
//
//                 toast.error(`${removedItem.name} удалено из списка любимых фильмов`, {
//                     position: "bottom-left",
//                 });
//             }
//
//             state.favoriteMovies = updatedCartItems;
//         },
//
//         setCart(state, action) {
//             state.favoriteMovies = action.payload;
//         },
//     },
// });
//
// export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
