import React from 'react'
import {Text, List } from "react-native-paper";
import {View} from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <List.Section>
      <List.Subheader>Some stuff</List.Subheader>
      <List.Item
        title="Profile"
        left={() => <List.Icon icon="account-circle" />}
        onPress={() => {navigation.navigate('Profile')}}
      />
    </List.Section>
  )
}

export default SettingsScreen
