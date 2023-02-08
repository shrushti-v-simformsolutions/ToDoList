import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { image_url } from '../api/Url';

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

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    width: '90%',
    height: 400,
    borderWidth: 1,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default MovieCard;