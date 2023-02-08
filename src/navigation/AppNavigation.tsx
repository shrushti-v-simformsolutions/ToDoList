import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { MovieList } from '../components/Card';
import {Search} from '../components/Search';
import { RootParamList } from './NavigationTypes';

const Stack = createStackNavigator<RootParamList>();


export const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'Home'} >
      <Stack.Screen name="Home" component={MovieList} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
