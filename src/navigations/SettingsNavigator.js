import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import NavBar from "./NavBar";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";

const Stack = createStackNavigator()

const SettingsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <NavBar title='Settings' drawerNavigation={navigation} />
      }}
      gestureDirection="horizontal"
    >
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='Profile' component={ProfileSettingsScreen}
                    options={{title: 'Profile Settings'}}
      />
    </Stack.Navigator>
  )
}

export default SettingsNavigator