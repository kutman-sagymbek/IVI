import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {loginAccount} from "./userSlice";

export const userApi = createApi(
    {
        reducerPath: 'userApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'http://localhost:8080'
        }),
        endpoints: build => ({
            registerUser: build.mutation({
                query: (body) => ({
                    url: 'register',
                    method: 'POST',
                    body
                }),
                onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                    const {data} = await queryFulfilled;
                    try{
                        dispatch(loginAccount(data.user));
                        localStorage.setItem('token', data.accessToken);
                        // localStorage.setItem('refresh', data.refresh);
                    }catch(err) {
                        console.log(err)
                    }
                }
            }),

            loginUser: build.mutation({
                query: (body) => ({
                    url: 'login',
                    method: 'POST',
                    body
                }),
                onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                    const {data} = await queryFulfilled;
                    try{
                        dispatch(loginAccount(data.user));
                        localStorage.setItem('token', data.accessToken);
                        // localStorage.setItem('refresh', data.refreshToken);
                    }catch(err) {
                        console.log(err)
                    }
                }
            }),
            // refreshAccessToken: build.mutation({
            //     query: (refreshToken) => ({
            //         url: 'refresh-token',
            //         method: 'POST',
            //         body: { refreshToken }
            //     }),
            //     onQueryFulfilled: ({ data }) => {
            //         if (data.accessToken) {
            //             localStorage.setItem('token', data.accessToken);
            //         }
            //     }
            // }),
        })
    }
)

export const {useRegisterUserMutation, useLoginUserMutation, useRefreshAccessTokenMutation} = userApi;