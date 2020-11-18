import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native"

const DrawerContent = ({ props, rootNavigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} onItemPress={() => {
      props.navigation.dispatch({
      ...CommonActions.reset({
        index: 0
      })
    })
      }}/>
      <DrawerItem label="Logout" onPress={() => rootNavigation.navigate("Auth", { screen: "Login" })} />
    </DrawerContentScrollView>
  )
}


export default DrawerContent
