import React from 'react'
import {Button, Dialog, Portal, TextInput} from "react-native-paper";

const EditDialog = ({ visible, hideDialog }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Change Username</Dialog.Title>
        <Dialog.Content>
          <TextInput label="Username" />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button>Confirm</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default EditDialog