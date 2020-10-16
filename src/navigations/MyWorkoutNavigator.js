import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "./NavBar";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";

const Stack = createStackNavigator()

const MyWorkoutNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='My Workout' component={MyWorkoutScreen} />
    </Stack.Navigator>
  )
}

export default MyWorkoutNavigator
