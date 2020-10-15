import React from 'react';
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'
import { createNewUser } from '../redux/actions/actionCreators'
import { connect } from 'react-redux'

const RegisterForm = ({ createNewUser }) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
      }}
      onSubmit={values => createNewUser(values)}
    >
      {({handleChange, handleSubmit, values}) => (
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
          <TextInput
            label='First Name'
            mode='outlined'
            style={styles.inputField}
            value={values.first_name}
            onChangeText={handleChange('first_name')}
          />
          <TextInput
            label='Last Name'
            mode='outlined'
            style={styles.inputField}
            value={values.last_name}
            onChangeText={handleChange('last_name')}
          />
          <TextInput
            label='Email'
            mode='outlined'
            style={styles.inputField}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          <View style={styles.button}>
            <Button
              mode="contained" 
              onPress={handleSubmit}
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
  }
})

const mapDispatchToProps = dispatch => { return { createNewUser: userData => dispatch(createNewUser(userData)) } }

export default connect(null, mapDispatchToProps)(RegisterForm)