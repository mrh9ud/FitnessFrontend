import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import MyWorkoutNavigator from "./MyWorkoutNavigator";
import StatisticsNavigator from "./StatisticsNavigator";
import SettingsNavigator from "./SettingsNavigator";
import AccountNavigator from "./AccountNavigator";
import { connect } from 'react-redux'
import ResetPasswordForm from "../forms/ResetPasswordForm"
import { createStackNavigator } from "@react-navigation/stack";

const MainNavigator = ({ currentUser, passwordResetting }) => {
  const Drawer = createDrawerNavigator()
  const Stack = createStackNavigator()

  return (
    <>
    {currentUser ? passwordResetting ?
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reset Password" component={ResetPasswordForm} />
      </Stack.Navigator>
    </NavigationContainer>
    :
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="My Workout" component={MyWorkoutNavigator}/>
        <Drawer.Screen name="Stats" component={StatisticsNavigator}/>
        <Drawer.Screen name="Settings" component={SettingsNavigator}/>
      </Drawer.Navigator>
    </NavigationContainer>
    :
    <AccountNavigator />
    }
    </>
  )
}

const mapStateToProps = store => ({ currentUser: store.currentUser, passwordResetting: store.passwordResetting })

export default connect(mapStateToProps)(MainNavigator)