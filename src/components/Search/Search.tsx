import React, { useCallback, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { image_url } from '../../api/Url';
import { fetchQueredMovies, OnMovieSearchListState } from '../../redux/reducers/movieSearchSlice';
import { RootState } from '../../redux/store';
import styles from './SearchStyles';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [searchLength, setSearchLength] = useState(1); 
  const dispatch: any = useDispatch();
  const screenMovieState = useSelector<RootState, OnMovieSearchListState>(
    (state: RootState) => state.movieSearch
  );

  /**
  * Home screen renders all the movies list
  */
  const setPageindex = useCallback(
    (platform: string | undefined) => {
      if (platform === 'movies') {
        if (!screenMovieState.loading) {
          dispatch(
            fetchQueredMovies({
              page: screenMovieState.nextPage,
              querry: search,
              onNextPage: true
            })
          );
        }
      }
    },
    [dispatch, screenMovieState.loading, screenMovieState.nextPage, search]
  );

  const searchMovies = useCallback(() => {
    if (!screenMovieState.loading) {
      dispatch(
        fetchQueredMovies({
          page: 1,
          querry: search,
          onNextPage: false
        })
      );
      if (screenMovieState.movies.length === 0) {
        setSearchLength(0);
      }
    }
  }, [dispatch, screenMovieState.loading, screenMovieState.movies.length, search]);

  /**
  * Check the search
  */
  const checkSearch = () => {
    if (search.length === 0) {
      return false;
    }
    if (screenMovieState.movies.length > 0) {
      return false;
    }
    if (searchLength === 0 && search.length !== 0) {
      return true;
    }
  };

  const SearchCard = (props) => {
    const { search } = props;
    return (
      <View style={styles.search}>
        <Text>Nothing to show</Text>
      </View>
    )
  };

  const TrailerCard = ({item}) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: `${image_url}${item?.poster_path}` }}
          style={styles.image}
          resizeMode={'stretch'}
        />
      </View>
    )

  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyles} value={search} onChangeText={setSearch} />
      <TouchableOpacity style={styles.backArrowStyles} onPress={() => navigation.goBack()}>              
        <Ionicons name="arrow-back" size={28} color={'black'} />
      </TouchableOpacity>            
      <TouchableOpacity
        style={styles.backspaceStyles}
        onPress={() => {
          setSearch('');
        }}
      >              
        <Ionicons name="close" size={30} color={'black'} />
    </TouchableOpacity>            
    <TouchableOpacity 
      style={styles.searchStyles} 
      onPress={() => searchMovies()}
    >              
        <Icon name="database-search-outline" size={30} color={'black'} />
      </TouchableOpacity>                   
    { checkSearch() && !screenMovieState.loading && <SearchCard search={search} /> }
      <View style={styles.renderDataStyles}>          
      <FlatList
        removeClippedSubviews
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={screenMovieState.movies}
        renderItem={({ item }) => (
          <TrailerCard item={item} />
          )}
        maxToRenderPerBatch={10}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        onEndReached={() => setPageindex('movies')}
        onEndReachedThreshold={0.5}
      />        
      </View>
    </View>
  )
};

export default Search;