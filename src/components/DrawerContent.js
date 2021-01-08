import React from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from 'react-native-paper'
import { CommonActions } from "@react-navigation/native"
import { logOutUser } from "../redux/actions/users/actionCreators";
import { connect } from 'react-redux'

const DrawerContent = ({ props, rootNavigation }) => {
  const resetStackHistory = (name) => {
    props.navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{ name }]
      })
    });
  }
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item label="Home" icon="home" onPress={() => {
        props.navigation.navigate("Home")
        resetStackHistory("Home")
      }}/>
        <Drawer.Item label="My Workouts" icon="weight" onPress={() => {
          props.navigation.navigate("My Workouts")
          resetStackHistory("My Workouts")
        }}/>
        <Drawer.Item label="Stats" icon="chart-bar" onPress={() => {
          props.navigation.navigate("Stats")
          resetStackHistory("Stats")
        }}/>
        <Drawer.Item label="Settings" icon="settings" onPress={() => {
          props.navigation.navigate("Settings")
          resetStackHistory("Settings")
        }}/>
      </Drawer.Section>
      <DrawerItem label="Logout" onPress={() => {
        logOutUser()
        rootNavigation.navigate("Auth", { screen: "Login" })
      }} />
    </DrawerContentScrollView>
  )
}

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
})

export default connect(null, mapDispatchToProps)(DrawerContent)
