import React from 'react'
import {Button, Dialog, Portal, TextInput} from "react-native-paper";
import { Formik } from 'formik'

const EditDialog = ({ visible, hideDialog, title, formKey, value }) => {
  return (
    <Portal>
      <Formik
        initialValues={{
          [formKey]: ''
        }}
        onSubmit={() => {debugger}}
      >
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Change {title}</Dialog.Title>
          <Dialog.Content>
            <TextInput label={title} placeholder={value}/>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </Formik>
    </Portal>
  )
}

export default EditDialog