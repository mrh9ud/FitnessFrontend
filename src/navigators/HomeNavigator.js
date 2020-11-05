import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NavBar from "./NavBar";
import WorkoutQuestionForm from '../forms/workouts/WorkoutQuestionForm'
import PotentialWorkoutScreen from '../screens/PotentialWorkoutScreen'
import WorkoutScreen from '../screens/WorkoutScreen'

const Stack = createStackNavigator()

const HomeNavigator = ({ route, navigation }) => {
  const { rootNavigation } = route.params
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <NavBar
          props={props}
          drawerNavigation={navigation}
          rootNavigation={rootNavigation} />}}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={"Workout Questionnaire"} component={WorkoutQuestionForm} />
      <Stack.Screen name={"Potential Workout"} component={PotentialWorkoutScreen} />
      <Stack.Screen name={"Workout"} component={WorkoutScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator