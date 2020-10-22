import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { verifyUserData } from '../redux/actions/users/actionCreators'
import { loginFormValidations } from '../helpers/Validations'
import { USERNAME, PASSWORD } from '../helpers/FormKeyType'

const LoginForm = ({ verifyUserData, navigation }) => {
  return (
    <View>
      <Formik 
        initialValues={{[USERNAME]: '', [PASSWORD]: ''}}
        onSubmit={(values) => verifyUserData(values)}
        validationSchema={loginFormValidations}
      >
        {({ handleSubmit, handleChange, setFieldTouched, touched, isValid, values, errors }) => (
        <View>
          <TextInput
            label='Username'
            mode='outlined'
            icon="account"
            style={styles.inputField}
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={() => setFieldTouched('username')}
          />
          {touched.username && errors.username &&
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
            onBlur={() => setFieldTouched("password")}
          />
          {touched.username && errors.password &&
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
  }
})

const mapDispatchToProps = dispatch => { return ({ verifyUserData: (userData) => dispatch(verifyUserData(userData)) }) }

export default connect(null, mapDispatchToProps)(LoginForm)