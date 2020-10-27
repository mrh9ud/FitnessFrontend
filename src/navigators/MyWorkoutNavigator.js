import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "./NavBar";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";

const Stack = createStackNavigator()

const MyWorkoutNavigator = ({ route, navigation }) => {
  const { rootNavigation } = route.params
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <NavBar
          props={props}
          drawerNavigation={navigation}
          rootNavigation={rootNavigation} />}}
    >
      <Stack.Screen name='My Workout' component={MyWorkoutScreen} />
    </Stack.Navigator>
  )
}

export default MyWorkoutNavigator
