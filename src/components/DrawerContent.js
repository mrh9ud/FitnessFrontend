import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native"

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
      <DrawerItem label="Home" onPress={() => {
        props.navigation.navigate("Home")
        resetStackHistory("Home")
      }} />
      <DrawerItem label="My Workouts" onPress={() => {
        props.navigation.navigate("My Workouts")
        resetStackHistory("My Workouts")
      }} />
      <DrawerItem label="Stats" onPress={() => {
        props.navigation.navigate("Stats")
        resetStackHistory("Stats")
      }} />
      <DrawerItem label="Settings" onPress={() => {
        props.navigation.navigate("Settings")
        resetStackHistory("Settings")
      }} />
      <DrawerItem label="Logout" onPress={() => rootNavigation.navigate("Auth", { screen: "Login" })} />
    </DrawerContentScrollView>
  )
}


export default DrawerContent
