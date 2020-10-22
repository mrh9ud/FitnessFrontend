import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NavBar from "./NavBar";
import WorkoutQuestionForm from '../components/WorkoutQuestionForm'

const Stack = createStackNavigator()

const HomeNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <NavBar props={props} drawerNavigation={navigation} />}}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={"Workout Questionnaire"} component={WorkoutQuestionForm} />
    </Stack.Navigator>
  )
}

export default HomeNavigator