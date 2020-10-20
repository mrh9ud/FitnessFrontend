import React from 'react'
import {List, Divider, Text, Portal, Button, Dialog, TextInput} from "react-native-paper";
import { View } from "react-native";
import { connect } from 'react-redux'
import EditDialog from "../components/EditDialog";
import { USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL } from '../helpers/FormKeyType'

const ProfileSettingsScreen = ({ currentUser }) => {
  const [visible, setVisible] = React.useState(false)
  const [entry, setEntry] = React.useState('')
  const [entryKey, setEntryKey] = React.useState('')
  const [value, setValue] = React.useState('')

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  const handlePress = (entry, entryKey, value) => {
    setEntry(entry)
    setEntryKey(entryKey)
    setValue(value)
    showDialog()
  }

  return (
    <View>
      <EditDialog visible={visible}
                  hideDialog={hideDialog}
                  title={entry}
                  formKey={entryKey}
                  value={value}
      />
      <List.Section>
        <List.Subheader>Account Information</List.Subheader>
        <List.Item
          title="Username"
          right={() => <Text>{currentUser.username}</Text>}
          onPress={() => handlePress("Username", USERNAME, currentUser.username)}
        />
        <Divider />
        <List.Item
          title="Change Password"
          right={() => <Text>**********</Text>}
          onPress={() => handlePress("Password", PASSWORD)}
        />
        <Divider />
        <List.Subheader>Personal Information</List.Subheader>
        <List.Item
          title="First Name"
          right={() => <Text>{currentUser.first_name}</Text>}
          onPress={() => handlePress("First Name", FIRST_NAME, currentUser.first_name)}
        />
        <Divider />
        <List.Item
          title="Last Name"
          right={() => <Text>{currentUser.last_name}</Text>}
          onPress={() => handlePress("Last Name", LAST_NAME, currentUser.last_name)}
        />
        <Divider />
        <List.Item
          title="Email"
          right={() => <Text>{currentUser.email}</Text>}
          onPress={() => handlePress("Email", EMAIL, currentUser.email)}
        />
        <Divider />
      </List.Section>
    </View>
  )
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(ProfileSettingsScreen)
