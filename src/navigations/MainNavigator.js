import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import MyWorkoutNavigator from "./MyWorkoutNavigator";
import StatisticsNavigator from "./StatisticsNavigator";
import SettingsNavigator from "./SettingsNavigator";
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

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(MainNavigator)