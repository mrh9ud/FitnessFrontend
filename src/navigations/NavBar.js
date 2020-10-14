import React, { Component } from 'react'
import { Appbar } from "react-native-paper";
import { View } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const NavBar = ({ title, navigation }) => {
  return (
    <React.Fragment>
      <Appbar.Header dark={true}>
        <Appbar.Action icon='menu' onPress={() => navigation.openDrawer()} />
        <Appbar.Content title={title}/>
        <Appbar.Action icon={MORE_ICON}/>
      </Appbar.Header>
    </React.Fragment>
  )
};

export default NavBar;