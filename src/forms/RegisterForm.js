import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from 'formik'
import { createNewUser } from '../redux/actions/users/actionCreators'
import { connect } from 'react-redux'
import { USERNAME, PASSWORD, CONFIRM_PASSWORD, FIRST_NAME, LAST_NAME, EMAIL } from '../helpers/FormKeyType'
import { registrationFormValidations } from "../helpers/Validations";

const RegisterForm = ({ createNewUser }) => {
  return (
    <ScrollView>
      <Formik
        initialValues={{
          [USERNAME]: '',
          [PASSWORD]: '',
          [CONFIRM_PASSWORD]: '',
          [FIRST_NAME]: '',
          [LAST_NAME]: '',
          [EMAIL]: '',
        }}
        onSubmit={values => createNewUser(values)}
        validationSchema={registrationFormValidations}
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

            <TextInput
              label="First Name"
              placeholder='John'
              mode='outlined'
              style={styles.inputField}
              value={values.first_name}
              onChangeText={handleChange('first_name')}
            />
            {errors.first_name &&
              <Text style={styles.error}>{errors.first_name}</Text>}

            <TextInput
              label="Last Name"
              placeholder='Doe'
              mode='outlined'
              style={styles.inputField}
              value={values.last_name}
              onChangeText={handleChange('last_name')}
            />
            {errors.last_name &&
              <Text style={styles.error}>{errors.last_name}</Text>}

            <TextInput
              label='Email'
              placeholder="johndoe@email.com"
              mode='outlined'
              style={styles.inputField}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {errors.email &&
              <Text style={styles.error}>{errors.email}</Text>}

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
    </ScrollView>
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

const mapDispatchToProps = dispatch => { return { createNewUser: userData => dispatch(createNewUser(userData)) } }

export default connect(null, mapDispatchToProps)(RegisterForm)