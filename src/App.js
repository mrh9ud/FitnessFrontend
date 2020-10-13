import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainContainer from './containers/MainContainer'
import LoginForm from './components/LoginForm'
import { Provider } from 'react-redux';
import store from './redux/store'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainContainer} />
            <Stack.Screen name="Login" component={LoginForm} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}