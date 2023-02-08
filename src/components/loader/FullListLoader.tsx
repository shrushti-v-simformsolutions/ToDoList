import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './FullListLoaderStyles';


const FullListLoader = (props) => {
  const { spinnerColor = 'white', isNonBlockScreen, loaderStyle } = props;
  return (
    <View
      style={[
        styles.loadFullContainer,
        !isNonBlockScreen ? styles.blockScreen : styles.nonBlockScreen,
        loaderStyle
      ]}>
      <View style={styles.paddedBox}>
        <ActivityIndicator size="large" color={spinnerColor} />
      </View>
    </View>
  );
};

export default FullListLoader;
