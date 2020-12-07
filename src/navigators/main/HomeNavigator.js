import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/main/home/HomeScreen";
import NavBar from "../NavBar";
import WorkoutQuestionForm from '../../forms/workouts/WorkoutQuestionForm'
import PotentialWorkoutScreen from '../../screens/main/home/PotentialWorkoutScreen'
import WorkoutPageLoading from '../../components/WorkoutPageLoading'
import WorkoutCreationForm from '../../forms/workouts/WorkoutCreationForm'

const Stack = createStackNavigator()

const HomeNavigator = ({ route, navigation }) => {
  const { rootNavigation } = route.params
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <NavBar
          props={props}
          drawerNavigation={navigation}
          rootNavigation={rootNavigation} />
      }}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={"Workout Questionnaire"} component={WorkoutQuestionForm} />
      <Stack.Screen name={"Create a Workout"} component={WorkoutCreationForm} />
      <Stack.Screen name={"Potential Workout"} component={PotentialWorkoutScreen} />
      <Stack.Screen name={"Workout Loading"} options={{ headerShown: false, animationEnabled: false }} component={WorkoutPageLoading} />
    </Stack.Navigator>
  )
}

export default HomeNavigator