import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NavBar from "../NavBar";
import MyWorkoutScreen from "../../screens/main/MyWorkoutScreen";
import WorkoutScreen from "../../containers/WorkoutScreen";
import WorkoutPageLoading from '../../components/WorkoutPageLoading';
import EditWorkoutForm from "../../forms/workouts/EditWorkoutForm";
import WorkoutInProgress from "../../components/WorkoutInProgress"

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
      <Stack.Screen name='My Workout' component={MyWorkoutScreen} />
      <Stack.Screen name='Workout' component={WorkoutScreen} />
      <Stack.Screen name='Edit Workout' component={EditWorkoutForm} />
      <Stack.Screen 
        name="Workout In Progress" 
        component={WorkoutInProgress}
      />
      <Stack.Screen 
        name="Workout Loading" 
        component={WorkoutPageLoading} 
        options={{ headerShown: false, animationEnabled: false }} 
      />
    </Stack.Navigator>
  )
}

export default MyWorkoutNavigator
