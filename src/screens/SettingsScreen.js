import React from 'react'
import { Divider, List } from "react-native-paper";

const SettingsScreen = ({ navigation }) => {
  return (
    <List.Section>
      <List.Subheader>Account Settings</List.Subheader>
      <Divider />
      <List.Item
        title="Edit Profile"
        left={() => <List.Icon icon="account-circle" />}
        onPress={() => {navigation.navigate('Edit Profile')}}
      />
      <Divider />
    </List.Section>
  )
}

export default SettingsScreen
