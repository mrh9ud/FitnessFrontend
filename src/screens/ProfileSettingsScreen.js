import React from 'react'
import {List, Divider, Text, Portal, Button, Dialog, TextInput} from "react-native-paper";
import { View } from "react-native";
import { connect } from 'react-redux'
import EditDialog from "../components/EditDialog";


const ProfileSettingsScreen = ({ currentUser }) => {
  const [visible, setVisible] = React.useState(false)

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  return (
    <View>
      <EditDialog visible={visible} hideDialog={hideDialog} />
      <List.Section>
        <List.Subheader>Account Information</List.Subheader>
        <List.Item
          title="Username"
          right={() => <Text>{currentUser.username}</Text>}
          onPress={() => showDialog}
        />
        <Divider />
        <List.Item
          title="Change Password"
          right={() => <Text>**********</Text>}
        />
        <Divider />
        <List.Subheader>Personal Information</List.Subheader>
        <List.Item
          title="First Name"
          right={() => <Text>{currentUser.first_name}</Text>}
        />
        <Divider />
        <List.Item
          title="Last Name"
          right={() => <Text>{currentUser.last_name}</Text>}
        />
        <Divider />
        <List.Item
          title="Email"
          right={() => <Text>{currentUser.email}</Text>}
        />
        <Divider />
      </List.Section>
    </View>
  )
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(ProfileSettingsScreen)
