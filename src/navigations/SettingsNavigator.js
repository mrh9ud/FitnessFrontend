import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import NavBar from "./NavBar";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";

const Stack = createStackNavigator()

const SettingsNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='Profile' component={ProfileSettingsScreen}
                    options={{title: 'Profile Settings'}}
      />
    </Stack.Navigator>
  )
}

export default SettingsNavigator