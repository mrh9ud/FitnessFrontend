import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NavBar from "./NavBar";
import WorkoutQuestionForm from '../forms/WorkoutQuestionForm'

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
    </Stack.Navigator>
  )
}

export default HomeNavigator