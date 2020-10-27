import React from 'react'
import { Button, Dialog, Portal, TextInput, Text } from "react-native-paper";
import { StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { updateUser, changePassword } from "../../redux/actions/users/actionCreators";
import { connect } from 'react-redux'
import { editFormValidations } from "../../helpers/Validations";
import { CONFIRM_PASSWORD } from '../../helpers/FormKeyType'

const EditUserForm = ({ visible, hideDialog, title, formKey, value, userId, updateUser, changePassword }) => {
  return (
    <Portal>
      <Formik
        initialValues={{
          [formKey]: '',
          [CONFIRM_PASSWORD]: ''
        }}
        onSubmit={values => {
          if (formKey  === 'password') {
            changePassword(values, userId)
          } else {
          updateUser(values, userId)
          }
        }}
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
                         secureTextEntry={formKey === 'password' ? true : false}
              />
              {errors[formKey] &&
                <Text style={styles.error}>{errors[formKey]}</Text>}

              {formKey === 'password' ?
              <>
              <TextInput 
                label="Confirm Password"
                placeholder="input the info above here!"
                mode="outlined"
                value={values.confirm_password}
                onChangeText={handleChange('confirm_password')}
                secureTextEntry={true}
              />
              {errors.confirm_password &&
                <Text style={styles.error}>{errors.confirm_password}</Text>}
              </>
              :
              null}

            </Dialog.Content>

            <Dialog.Actions>
              <Button 
                onPress={hideDialog}
                mode="contained"
                >Cancel
              </Button>
              <Button 
                onPress={() => {
                  handleSubmit()
                  hideDialog()
                }} 
                disabled={!isValid} 
                mode='contained'
                >Confirm
              </Button>
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

const mapDispatchToProps = dispatch => { 
  return { 
    updateUser: (userData, userId) => dispatch(updateUser(userData, userId)), 
    changePassword: (userData, userId) => dispatch(changePassword(userData, userId)) 
  } 
}

export default connect(null, mapDispatchToProps)(EditUserForm)