import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Appbar, TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'

const RegisterForm = props => {

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
      }}
      onSubmit={values => console.log(values)}
    >
      {({handleChange, handleSubmit, values}) => (
        <View>
          <TextInput
            label='Username'
            mode='outlined'
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <TextInput
            label='Password'
            mode='outlined'
            value={values.password}
            onChangeText={handleChange('password')}
          />
          <TextInput
            label='First Name'
            mode='outlined'
            value={values.firstName}
            onChangeText={handleChange('firstName')}
          />
          <TextInput
            label='Last Name'
            mode='outlined'
            value={values.lastName}
            onChangeText={handleChange('lastName')}
          />
          <TextInput
            label='Phone Number'
            mode='outlined'
            value={values.phoneNumber}
            onChangeText={handleChange('phoneNumber')}
          />
          <Button
            mode="Contained"
            onPress={handleSubmit}
          >Submit
          </Button>
        </View>
      )}
    </Formik>
  )
}

export default RegisterForm