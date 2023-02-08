import React from 'react';
import { View, Image } from 'react-native';
import { image_url } from '../../api/Url';
import styles from './MovieCardStyles';

const MovieCard  = ({item}) => {

  return(
    <View style={styles.card}>
      <Image
        source={{ uri: `${image_url}${item.poster_path}`}}
        style={styles.image}
        resizeMode={'stretch'}
      />
    </View>
  )
};

export default MovieCard;