import { movieURL } from './Url';
import type { MovieListState } from '../redux/movieSlice';
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
