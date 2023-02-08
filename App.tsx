/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux'; 
import TodoList from './src/components/TodoList';
import { SafeAreaView } from 'react-native';
import { MyStack } from './src/navigation/AppNavigation';


const App = () => {

  return (
    <Provider store={store}>
      {/* <SafeAreaView>
        <TodoList />
      </SafeAreaView> */}
      <MyStack/>
    </Provider>
  );
};

export default App;
