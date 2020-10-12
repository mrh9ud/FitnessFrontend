import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainContainer from './containers/MainContainer'
import { Provider } from 'react-redux';
import store from './redux/store'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainContainer} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}