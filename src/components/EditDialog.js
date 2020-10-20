import React from 'react'
import {Button, Dialog, Portal, TextInput} from "react-native-paper";
import { Formik } from 'formik'
import {updateUser} from "../redux/actions/actionCreators";
import { connect } from 'react-redux'

const EditDialog = ({ visible, hideDialog, title, formKey, value, userId, updateUser }) => {
  return (
    <Portal>
      <Formik
        initialValues={{
          [formKey]: '',
          id: userId
        }}
        onSubmit={(values, userId) => {updateUser(values, userId)}}
      >
        {({handleChange, handleSubmit, values}) => (
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Change {title}</Dialog.Title>
            <Dialog.Content>
              <TextInput label={title}
                         placeholder={value}
                         mode='outlined'
                         value={values[formKey]}
                         onChangeText={handleChange(formKey)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={handleSubmit}>Confirm</Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Formik>
    </Portal>
  )
}

const mapDispatchToProps = dispatch => { return { updateUser: userData => dispatch(updateUser(userData))}}

export default connect(null, mapDispatchToProps)(EditDialog)