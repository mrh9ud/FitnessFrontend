import React from 'react'
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { Formik } from 'formik'
import { updateUser } from "../redux/actions/actionCreators";
import { connect } from 'react-redux'
import { editFormValidation } from "../helpers/Validations";

const EditDialog = ({ visible, hideDialog, title, formKey, value, userId, updateUser }) => {
  return (
    <Portal>
      <Formik
        initialValues={{
          [formKey]: ''
        }}
        onSubmit={(values) => {updateUser(values, userId)}}
        validationSchema={() => editFormValidation(formKey)}
      >
        {({handleChange, handleSubmit, isValid, values}) => (
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
              <Button onPress={handleSubmit} disabled={!isValid} mode='contained'>Confirm</Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Formik>
    </Portal>
  )
}

const mapDispatchToProps = dispatch => { return { updateUser: (userData, userId) => dispatch(updateUser(userData, userId))}}

export default connect(null, mapDispatchToProps)(EditDialog)