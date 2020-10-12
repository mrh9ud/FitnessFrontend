import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainContainer from './containers/MainContainer'
import { Provider } from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";

const Stack = createStackNavigator();
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}