import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "./NavBar";
import StatisticsScreen from "../screens/StatisticsScreen";

const Stack = createStackNavigator()

const StatisticsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <NavBar title='Statistics' drawerNavigation={navigation} />
      }}
    >
      <Stack.Screen name='Statistics' component={StatisticsScreen} />
    </Stack.Navigator>
  )
}

export default StatisticsNavigator
