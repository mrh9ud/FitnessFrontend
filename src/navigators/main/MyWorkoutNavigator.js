import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "../NavBar";
import WorkoutScreen from "../../containers/WorkoutScreen";
import EditWorkoutForm from "../../forms/workouts/EditWorkoutForm";
import WorkoutInProgress from "../../components/WorkoutInProgress"
import WorkoutCompletionNavigator from "./WorkoutCompletionNavigator";

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
      <Stack.Screen name='My Workouts' component={WorkoutCompletionNavigator} />
      <Stack.Screen name='Workout' component={WorkoutScreen} />
      <Stack.Screen name='Edit Workout' component={EditWorkoutForm} />
      <Stack.Screen 
        name="Workout In Progress" 
        component={WorkoutInProgress}
      />
    </Stack.Navigator>
  )
}

export default MyWorkoutNavigator
