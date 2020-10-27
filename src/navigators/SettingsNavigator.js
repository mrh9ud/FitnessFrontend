import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import NavBar from "./NavBar";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";

const Stack = createStackNavigator()

const SettingsNavigator = ({ route, navigation }) => {
  const { rootNavigation } = route.params
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <NavBar
          props={props}
          drawerNavigation={navigation}
          rootNavigation={rootNavigation} />}}
    >
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='Edit Profile' component={ProfileSettingsScreen}
                    options={{title: 'Profile Settings'}}
      />
    </Stack.Navigator>
  )
}

export default SettingsNavigator