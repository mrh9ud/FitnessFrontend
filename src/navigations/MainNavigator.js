import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AccountNavigator from "./AccountNavigator";
import { connect } from 'react-redux'

const MainNavigator = ({ currentUser }) => {
  const Drawer = createDrawerNavigator()

  return (
    <>
    {currentUser
    ?
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="My Workout" component={MyWorkoutScreen}/>
        <Drawer.Screen name="Stats" component={StatisticsScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
    :
    <AccountNavigator />
    }
    </>
  )
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(MainNavigator)