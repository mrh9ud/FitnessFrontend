import {createDrawerNavigator} from "@react-navigation/drawer";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import  { connect } from 'react-redux'
import LoginForm from "../components/LoginForm";

const MainNavigator = props => {

  const Drawer = createDrawerNavigator();

  return (

    <>
      {props.currentUser
      ?
<<<<<<< HEAD
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="My Workout" component={MyWorkoutScreen}/>
            <Drawer.Screen name="Stats" component={StatisticsScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
          </Drawer.Navigator>
        </NavigationContainer>
=======
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainContainer}/>
        </Drawer.Navigator>
      </NavigationContainer>
>>>>>>> securing_account_creation
      :
      <LoginForm />
      }
    </>
  )
}

const mapStateToProps = store => { return ({ currentUser: store.currentUser })}

export default connect(mapStateToProps)(MainNavigator)