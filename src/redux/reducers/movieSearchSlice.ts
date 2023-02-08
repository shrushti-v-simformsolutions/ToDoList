import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as apiClient from '../../api/ApiClient';

export type OnMovieSearch = {
  movieName: string;
};

export type OnMovieSearchListState = {
  movies: any;
  loading: boolean;
  error: boolean;
  nextPage: number;
  querry: string;
  onNextPage: boolean;
};

const initialState: OnMovieSearchListState = {
  movies: [],
  loading: false,
  error: false,
  nextPage: 1,
  onNextPage: false,
  querry: ''
};

export const fetchQueredMovies = createAsyncThunk<{ movies: any },
  { page: number; querry: string; onNextPage: boolean }
>('movieSearch', async ({ page, querry }) => {
  const response = await apiClient.fetchSearchedMovies(page, querry);
  if (response.kind === 'success') {
    return {
      movies: response.body ?? []
    };
  } else {
    throw 'Error fetch movies';
  }
});

const MovieSearchSlice = createSlice({
  name: 'MovieSearch',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueredMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchQueredMovies.fulfilled, (state, action) => {
        if (action.meta.arg.onNextPage) {
          state.nextPage += 1;
          state.movies = state.movies.concat(action.payload.movies);
        } else {
          state.movies = [...action.payload.movies];
        }
        state.loading = false;
      })
      .addCase(fetchQueredMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  }
});

export const MovieSearchListReducer = MovieSearchSlice.reducer;