import * as React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies, MovieListState,  } from '../redux/movieSlice';
import { RootState } from '../redux/store';
import MovieCard from './MovieCard';

/**
 * Movie screen renders all the trailers list
 */
export const MovieList = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const screenMovieState = useSelector<RootState, MovieListState>(
    (state: RootState) => state.movieList
  );

  React.useEffect(() => {
    dispatch(fetchAllMovies({ page: 1 }));
  }, []);

  /**
   * Update page list
   */
  const updatePage = () => {
    if (!screenMovieState.loading) {
      dispatch(fetchAllMovies({ page: screenMovieState.nextPage }));
    }
  };

  return (
    <FlatList
      data={screenMovieState.movies}
      renderItem={({ item }) => {
        return <MovieCard item={item} />;
      }}
      keyExtractor={(_, index) => {
        return index.toString();
      }}
      onEndReached={updatePage}
      onEndReachedThreshold={0.5}
    />
  );
};