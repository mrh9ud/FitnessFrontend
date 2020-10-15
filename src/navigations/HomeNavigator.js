import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NavBar from "./NavBar";

const Stack = createStackNavigator()

const HomeNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <NavBar title='Home' drawerNavigation={navigation} />
      }}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator