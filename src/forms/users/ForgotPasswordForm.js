import React from 'react'
import { Dialog, Portal, TextInput, Text, Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { USERNAME, EMAIL } from '../../helpers/FormKeyType'
import { verifyEmailUsername } from '../../redux/actions/users/actionCreators'
import { forgotPasswordFormValidations } from '../../helpers/Validations'
import { connect } from 'react-redux'
import { Formik } from 'formik'

const ForgotPasswordForm = ({ verifyEmailUsername, hideForgotPasswordForm, visible, navigation }) => {

  return (
    <Portal>
      <Formik
        initialValues={{
            [USERNAME]: '',
            [EMAIL]: ''
        }}
        onSubmit={values => {
          navigation.navigate("Loading")
          verifyEmailUsername(values)
        }} 
        validationSchema={() => forgotPasswordFormValidations}
      >
        {({handleChange, handleSubmit, errors, isValid, values}) => (
          <Dialog visible={visible} onDismiss={hideForgotPasswordForm}>

            <Dialog.Title>Forgot Password</Dialog.Title>
            <Dialog.Content>

              <TextInput
                label="Username"
                placeholder="user_123"
                mode="outlined"
                style={styles.inputField}
                value={values.username}
                onChangeText={handleChange('username')}
              />
              {errors.username &&
                <Text style={styles.error}>{errors.username}</Text>}

              <TextInput 
                label="Email"
                placeholder="johndoe@email.com"
                mode="outlined"
                style={styles.inputField}
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email &&
                <Text style={styles.error}>{errors.email}</Text>}
                
            </Dialog.Content>

            <Dialog.Actions>
              <Button 
                onPress={hideForgotPasswordForm}
                mode="contained"
                >Close
              </Button>
              <Button 
                onPress={() => {
                  handleSubmit()
                  hideForgotPasswordForm()
                }} 
                disabled={!isValid}
                mode="contained"
                >Send Email
              </Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Formik>
    </Portal>

  )
}

const styles= StyleSheet.create({
  inputField: {
    paddingHorizontal: '5%', 
    paddingVertical: '5%'
  },
  button: {
    alignItems: 'center'
  },
  error: { 
    fontSize: 10, 
    color: 'red'  
  }
})

const mapDispatchToProps = dispatch => { return { verifyEmailUsername: userData => dispatch(verifyEmailUsername(userData)) } }

export default connect(null, mapDispatchToProps)(ForgotPasswordForm)