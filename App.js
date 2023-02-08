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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';
import store from './src/redux/store';
import { Provider } from 'react-redux'; 

const App = () => {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader/>
        <TodoList/>
      </SafeAreaView>
    )
  };

  return (
    <Provider store={store}>
      <RootApp/>
    </Provider>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
