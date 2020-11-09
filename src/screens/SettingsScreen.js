import React, {useEffect} from 'react'
import { Divider, List } from "react-native-paper";
import {setMenuOptions} from "../redux/actions/navBar/actionCreators";
import { connect } from 'react-redux'

const SettingsScreen = ({ navigation, setMenuOptions }) => {

  useEffect(() => {
    setMenuOptions()
  })

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

const mapDispatchToProps = dispatch => ({
  setMenuOptions: data => dispatch(setMenuOptions(data))
})

export default connect(null, mapDispatchToProps)(SettingsScreen)
