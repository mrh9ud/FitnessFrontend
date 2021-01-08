import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UncompletedWorkoutScreen from "../../screens/main/UncompletedWorkoutScreen";
import CompletedWorkoutScreen from "../../screens/main/CompletedWorkoutScreen";

const Tab = createMaterialTopTabNavigator();

const WorkoutCompletionNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current" component={UncompletedWorkoutScreen} />
      <Tab.Screen name="Completed" component={CompletedWorkoutScreen} />
    </Tab.Navigator>
  )
}

export default WorkoutCompletionNavigator