import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { Formik } from 'formik'
import { CONFIRM_PASSWORD, USERNAME, PASSWORD } from '../helpers/FormKeyType'
import { createNewPassword } from '../redux/actions/users/actionCreators'
import { resetPasswordFormValidations } from '../helpers/Validations'
import { connect } from 'react-redux'

const ResetPasswordForm = ({ route, createNewPassword }) => {
  const { rootNavigation } = route.params
  return (
    <Formik
      initialValues={{
        [USERNAME]: '',
        [PASSWORD]: '',
        [CONFIRM_PASSWORD]: ''
      }}
      onSubmit={values => {
        createNewPassword(values)
        rootNavigation.navigate('App')
      }}
      validationSchema={resetPasswordFormValidations}
    >
    {({handleChange, handleSubmit, errors, isValid, values}) => (
      <View>
        <TextInput
          label="Username"
          placeholder='user_123'
          mode='outlined'
          style={styles.inputField}
          value={values.username}
          onChangeText={handleChange('username')}
        />
        {errors.username &&
          <Text style={styles.error}>{errors.username}</Text>}

        <TextInput
          label="Password"
          placeholder='s0meth1ng_s3cure_her3!'
          mode='outlined'
          style={styles.inputField}
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry={true}
        />
        {errors.password &&
          <Text style={styles.error}>{errors.password}</Text>}

        <TextInput
          label="Confirm Password"
          placeholder="s0meth1ng_s3cure_her3!"
          mode='outlined'
          style={styles.inputField}
          value={values.confirm_password}
          onChangeText={handleChange('confirm_password')}
          secureTextEntry={true}
        />
        {errors.confirm_password &&
          <Text style={styles.error}>{errors.confirm_password}</Text>}

        <View style={styles.button}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            disabled={!isValid}
            >Submit
          </Button>
        </View>
      </View>
      )}
    </Formik>
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

const mapDispatchToProps = dispatch => { return { createNewPassword: userData => dispatch(createNewPassword(userData)) } }

export default connect(null, mapDispatchToProps)(ResetPasswordForm)