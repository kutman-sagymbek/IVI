import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi(
    {
        reducerPath: 'moviesApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://api.kinopoisk.dev/',
            prepareHeaders: (headers) => {
                headers.set('Content-Type', 'application/json');
                headers.set('X-API-KEY', 'XN5MV91-HTM4HKZ-N2PQGWE-SC84NAA');
                return headers;
            }
        }),
        endpoints: build => ({
            getMovies: build.query({
                query: (type) => {
                    return `v1.3/movie?page=1&limit=24&type=${type}`;
                }
            }),

            getPremier: build.query({
                query: () => {
                    return 'v1.3/movie?page=1&limit=5&premiere.country=%D0%A1%D0%A8%D0%90';
                }
            }),

            searchMovies: build.query({
                query: (debouncedSearchValue) => {
                    return `v1.2/movie/search?page=1&limit=5&query=${debouncedSearchValue}`;
                },

            }),
            getMovie: build.query({
                query: (id) => {
                    return `v1.3/movie/${id}`;
                }
            })
        })
    }
)

export const {useGetMoviesQuery, useGetPremierQuery, useSearchMoviesQuery, useGetMovieQuery} = moviesApi;