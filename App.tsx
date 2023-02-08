/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux'; 
import { MovieList } from './src/components/MovieList';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <MovieList/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
