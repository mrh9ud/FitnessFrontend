import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper'
import * as React from 'react';
import MainContainer from './containers/MainContainer'
import LoginForm from './components/LoginForm'
import { Provider } from 'react-redux';
import store from './redux/store'
import { Text, View } from 'react-native'
import RegisterForm from "./components/RegisterForm";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Provider store={store}>
          {/*<Stack.Navigator initialRouteName="Main">*/}
          {/*  <Stack.Screen name="Main" component={MainContainer}/>*/}
          {/*  <Stack.Screen name="Login" component={LoginForm}/>*/}
          {/*</Stack.Navigator>*/}
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MainContainer} />
            <Drawer.Screen name="Test" component={LoginForm} />
            <Drawer.Screen name="Register" component={RegisterForm} />
          </Drawer.Navigator>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}