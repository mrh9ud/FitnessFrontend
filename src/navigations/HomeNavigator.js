import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NavBar from "./NavBar";

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <NavBar props={props} />}}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator