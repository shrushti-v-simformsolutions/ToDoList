import { movieURL, onSearch } from './Url';
import type { MovieListState } from '../redux/reducers/movieSlice';
import { OnMovieSearchListState } from '../redux/reducers/movieSearchSlice';

type ResponseKind = 'success' | 'failure';
type NetworkResponse<T> = {
  kind: ResponseKind;
  body: T;
};

/**
 * USED TO FETCH MOVIES FROM API
 */
export const fetchMovieFromApi = async (
  page: number
): Promise<NetworkResponse<MovieListState[]>> => {
  const response = await fetch(movieURL(page), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.results
    };
  } else {
    return {
      kind: 'failure',
      body: []
    };
  }
};

/**
 * USED TO FETCH SEARCHED MOVIES
 */
export const fetchSearchedMovies = async (
  page: number,
  querry: string
): Promise<NetworkResponse<OnMovieSearchListState[]>> => {
  const response = await fetch(onSearch(page, querry), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.results
    };
  } else {
    return {
      kind: 'failure',
      body: []
    };
  }
};