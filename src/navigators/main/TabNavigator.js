import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyWorkoutScreen from "../../screens/main/MyWorkoutScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Completed" component={MyWorkoutScreen} />
      <Tab.Screen name="Uncompleted" component={MyWorkoutScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator