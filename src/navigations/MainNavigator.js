import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import  { connect } from 'react-redux'
import LoginForm from "../components/LoginForm";
import * as encryptor from '../encryption/SecureStore.js'
import { verifyToken } from '../redux/actions/actionCreators'

const Drawer = createDrawerNavigator();

const MainNavigator = ({ currentUser, verifyToken }) => {

useEffect(() => {
  let didCancel = false

  async function getUserToken() {
    const token = await encryptor.getCredentials()
    if (!didCancel && token) {
      verifyToken(token)
    }
  }
  getUserToken();
  return () => { didCancel = true }
}, [])

  return (
    <>
      {currentUser
      ?
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="My Workout" component={MyWorkoutScreen}/>
          <Drawer.Screen name="Stats" component={StatisticsScreen}/>
          <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
      :
      <LoginForm />
      }
    </>
  )
}

const mapDispatchToProps = dispatch => { return { verifyToken: token => dispatch(verifyToken(token)) } }
const mapStateToProps = store => { return ({ currentUser: store.currentUser })}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator)