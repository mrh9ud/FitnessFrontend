import React from 'react'
import { List, Divider, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { connect } from 'react-redux'
import EditUserForm from "../components/EditUserForm";
import { USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL } from '../helpers/FormKeyType'

const ProfileSettingsScreen = ({ currentUser }) => {
  const [visible, setVisible] = React.useState(false)
  const [formTitle, setFormTitle] = React.useState('')
  const [formKey, setFormKey] = React.useState('')
  const [formValue, setFormValue] = React.useState('')

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  const handlePress = (entry, entryKey, value) => {
    setFormTitle(entry)
    setFormKey(entryKey)
    setFormValue(value)
    showDialog()
  }

  return (
    <ScrollView>
      {/*Only render the edit box if there is a supplied form key*/}
      {
      formKey
      ?
      <EditUserForm visible={visible}
                  hideDialog={hideDialog}
                  title={formTitle}
                  formKey={formKey}
                  value={formValue}
                  userId={currentUser.id}
      />
      :
      null
      }
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
    </ScrollView>
  )
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(ProfileSettingsScreen)
