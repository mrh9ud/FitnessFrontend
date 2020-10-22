import React from 'react'
import { Button, Dialog, Portal, TextInput, Text } from "react-native-paper";
import { StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { updateUser } from "../redux/actions/users/actionCreators";
import { connect } from 'react-redux'
import { editFormValidations } from "../helpers/Validations";

const EditUserForm = ({ visible, hideDialog, title, formKey, value, userId, updateUser }) => {
  return (
    <Portal>
      <Formik
        initialValues={{
          [formKey]: ''
        }}
        onSubmit={(values) => {updateUser(values, userId)}}
        validationSchema={() => editFormValidations(formKey)}
      >
        {({handleChange, handleSubmit, errors, isValid, values}) => (
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Change {title}</Dialog.Title>
            <Dialog.Content>
              <TextInput label={title}
                         placeholder={value}
                         mode='outlined'
                         value={values[formKey]}
                         onChangeText={handleChange(formKey)}
              />
              {errors[formKey] &&
                <Text style={styles.error}>{errors[formKey]}</Text>}
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={() => {
                handleSubmit()
                hideDialog()
                }} disabled={!isValid} mode='contained'>Confirm</Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Formik>
    </Portal>
  )
}

const styles= StyleSheet.create({
  error: { 
    fontSize: 10, 
    color: 'red'  
  }
})

const mapDispatchToProps = dispatch => { return { updateUser: (userData, userId) => dispatch(updateUser(userData, userId))}}

export default connect(null, mapDispatchToProps)(EditUserForm)