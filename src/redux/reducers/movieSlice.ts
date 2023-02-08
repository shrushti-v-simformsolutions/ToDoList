import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as apiClient from '../../api/ApiClient';

export type Movie = {
  movieName: string;
};

export type MovieListState = {
  movies: any;
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: MovieListState = {
  movies: [],
  loading: false,
  error: false,
  nextPage: 1
};

export const fetchAllMovies = createAsyncThunk<{ movies: any }, { page: number }>(
  'fetchMovies',
  async ({ page }) => {
    const response = await apiClient.fetchMovieFromApi(page);
    if (response.kind === 'success') {
      return {
        movies: response.body ?? []
      };
    } else {
      throw 'Error fetch movies';
    }
  }
);

const MovieListSlice = createSlice({
  name: 'MovieList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.nextPage += 1;
        state.movies = state.movies.concat(action.payload.movies);
        state.loading = false;
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  }
});

export const MovieListSliceReducer = MovieListSlice.reducer;