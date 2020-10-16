import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "./NavBar";
import StatisticsScreen from "../screens/StatisticsScreen";

const Stack = createStackNavigator()

const StatisticsNavigator = () => {
  return (
    <Stack.Navigator
      options={{ header: props => <NavBar {...props} />}}
    >
      <Stack.Screen name='Statistics' component={StatisticsScreen} />
    </Stack.Navigator>
  )
}

export default StatisticsNavigator
