import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, Appbar, TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { verifyUserData } from '../redux/actions/actionCreators'

const LoginForm = props => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title='Login' subtitle='Submit Login Info' />
        <Appbar.Action icon='magnify' />
        <Appbar.Action icon='dots-vertical' />
      </Appbar.Header>

      <Formik 
        initialValues={{username: '', password: ''}}
        onSubmit={(values) => props.verifyUserData(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
        <View>
          <TextInput
            label='Username'
            mode='outlined'
            style={styles.inputField}
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <TextInput
            label='Password'
            mode='outlined'
            style={styles.inputField}
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
          />
          <View style={styles.button}>
            <Button
              mode="contained"
              onPress={handleSubmit}
            >
              Submit
            </Button>

            <Text>Not a user?</Text>

            <Button
              mode="contained"
              onPress={() => {alert("Registering...")}}
            >
              Register
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
  }
})

const mapDispatchToProps = dispatch => {
  return ({ verifyUserData: (userData) => dispatch(verifyUserData(userData)) })
}

export default connect(null, mapDispatchToProps)(LoginForm)