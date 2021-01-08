import React from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from 'react-native-paper'
import { resetStackHistory } from '../helpers/Functions'
import { logOutUser } from "../redux/actions/users/actionCreators";
import { connect } from 'react-redux'

const DrawerContent = ({ props, rootNavigation }) => {
  const { navigation } = props
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item label="Home" icon="home" onPress={() => {
          navigation.navigate("Home")
          resetStackHistory("Home", navigation)
      }}/>
        <Drawer.Item label="My Workouts" icon="weight" onPress={() => {
          navigation.navigate("My Workouts")
          resetStackHistory("My Workouts", navigation)
        }}/>
        <Drawer.Item label="Stats" icon="chart-bar" onPress={() => {
          navigation.navigate("Stats")
          resetStackHistory("Stats", navigation)
        }}/>
        <Drawer.Item label="Settings" icon="settings" onPress={() => {
          navigation.navigate("Settings")
          resetStackHistory("Settings", navigation)
        }}/>
      </Drawer.Section>
      <DrawerItem label="Logout" onPress={() => {
        logOutUser()
        rootNavigation.navigate("Auth", { screen: "Login" })
      }} />
    </DrawerContentScrollView>
  )
}

const mapDispatchToProps = dispatch => ({ logOutUser: () => dispatch(logOutUser()) })

export default connect(null, mapDispatchToProps)(DrawerContent)