import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { verifyUserData } from '../../redux/actions/users/actionCreators'
import { loginFormValidations } from '../../helpers/Validations'
import { USERNAME, PASSWORD } from '../../helpers/FormKeyType'
import ForgotPasswordForm from './ForgotPasswordForm'

const LoginForm = ({ verifyUserData, route, navigation }) => {
  const { rootNavigation } = route.params

  const [visible, setVisible] = useState(false)
  const hideForgotPasswordForm = () => setVisible(false)
  const showForgotPasswordForm = () => setVisible(true);

  return (
    <View>
      {visible
      ?
      <ForgotPasswordForm
        hideForgotPasswordForm={hideForgotPasswordForm}
        visible={visible}
      />
      :
      null
      }

      <Formik
        initialValues={{[USERNAME]: '', [PASSWORD]: ''}}
        onSubmit={async (values, passwordResettingResponse) => {
          const loggedIn = await verifyUserData(values, passwordResettingResponse)
          if (loggedIn === 'SUCCESS') rootNavigation.navigate('App')
          else if (loggedIn === 'PASSWORD_RESET') navigation.navigate('Reset Password')
        }}
        validationSchema={loginFormValidations}
      >
        {({ handleSubmit, handleChange, isValid, values, errors }) => (
        <View>
          <TextInput
            label='Username'
            mode='outlined'
            icon="account"
            style={styles.inputField}
            value={values.username}
            onChangeText={handleChange('username')}
          />
          {errors.username &&
            <Text style={styles.error}>{errors.username}</Text>
          }
          <TextInput
            label='Password'
            mode='outlined'
            icon="account-lock"
            style={styles.inputField}
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
          />
          {errors.password &&
            <Text style={styles.error}>{errors.password}</Text>
          }
          <View style={styles.button}>
            <Button
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
            >
              Submit
            </Button>

            <Text>Don't have an account?</Text>

            <Button
              mode="contained"
              onPress={() => navigation.navigate("New Account")}
              >Register
            </Button>

            <Text
              mode="contained"
              style={styles.forgotPassText}
              onPress={() => showForgotPasswordForm()}
              >Forgot Your Password?
            </Text>
          </View>
        </View>
        )}
      </Formik>
    </View>
  );
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
  },
  forgotPassText: {
    paddingVertical: '3%',
    color: 'blue'
  }
})

const mapDispatchToProps = dispatch => { return ({ verifyUserData: (userData) => dispatch(verifyUserData(userData)) }) }

export default connect(null, mapDispatchToProps)(LoginForm)