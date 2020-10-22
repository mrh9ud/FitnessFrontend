import React from 'react';
import { View, StyleSheet } from 'react-native'
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from 'formik'
import { createNewUser } from '../redux/actions/users/actionCreators'
import { connect } from 'react-redux'
import { USERNAME, PASSWORD, CONFIRM_PASSWORD, FIRST_NAME, LAST_NAME, EMAIL } from '../helpers/FormKeyType'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    username: yup
      .string().required("username required")
      .label("Username")
      .min(4, "Must have at least 4 characters")
      .max(12, "No more than 12 characters")
      .matches(/^\S[A-Za-z0-9_]+$/g, { message: "No spaces or special characters", excludeEmptyString: true }),
    password: yup
      .string().required("password required")
      .label("Password")
      .min(6, "Must be at least 6 characters")
      .max(25, "No more than 25 characters")
      .matches(/^[\S]+$/g, { message: "No spaces permitted", excludeEmptyString: true }),
    confirm_password: yup
      .string().required("must confirm matching passwords")
      .label("Confirm Password")
      .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.password === value;
      }),
    first_name: yup
      .string().required("first name required")
      .label("First Name")
      .min(2, "Must have at least 2 characters")
      .max(15, "No more than 15 characters")
      .matches( /^([A-Za-z](\s?|-|'))+[A-Za-z]$/g, { message: "No special characters or extra spaces", excludeEmptyString: true }),
    last_name: yup
      .string().required("last name required")
      .label("Last Name")
      .min(2, "Must have at least 2 characters")
      .max(20, "No more than 20 characters")
      .matches( /^([A-Za-z](\s?|-|'))+[A-Za-z]$/g , { message: "No special characters or spaces" }),
    email: yup
      .string().required("email required").email("Not a valid email")
      .label("Email")
})

const RegisterForm = ({ createNewUser }) => {
  return (
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
      validationSchema={validationSchema}
    >
      {({handleChange, handleSubmit, errors, setFieldTouched, touched, isValid, values}) => (
        <View>
          <TextInput
            label="Username"
            placeholder='user_123'
            mode='outlined'
            style={styles.inputField}
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={() => setFieldTouched('username')}
          />
          {touched.username && errors.username &&
            <Text style={styles.error}>{errors.username}</Text>}

          <TextInput
            label="Password"
            placeholder='s0meth1ng_s3cure_her3!'
            mode='outlined'
            style={styles.inputField}
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
            onBlur={() => setFieldTouched('password')}
          />
          {touched.password && errors.password &&
            <Text style={styles.error}>{errors.password}</Text>}

          <TextInput 
            label="Confirm Password"
            placeholder="s0meth1ng_s3cure_her3!"
            mode='outlined'
            style={styles.inputField}
            value={values.confirm_password}
            onChangeText={handleChange('confirm_password')}
            secureTextEntry={true}
            onBlur={() => setFieldTouched('confirm_password')}
          />
          {touched.confirm_password && errors.confirm_password &&
            <Text style={styles.error}>{errors.confirm_password}</Text>}

          <TextInput
            label="First Name"
            placeholder='John'
            mode='outlined'
            style={styles.inputField}
            value={values.first_name}
            onChangeText={handleChange('first_name')}
            onBlur={() => setFieldTouched('first_name')}
          />
          {touched.first_name && errors.first_name &&
            <Text style={styles.error}>{errors.first_name}</Text>}

          <TextInput
            label="Last Name"
            placeholder='Doe'
            mode='outlined'
            style={styles.inputField}
            value={values.last_name}
            onChangeText={handleChange('last_name')}
            onBlur={() => setFieldTouched('last_name')}
          />
          {touched.last_name && errors.last_name &&
            <Text style={styles.error}>{errors.last_name}</Text>}

          <TextInput
            label='Email'
            placeholder="johndoe@email.com"
            mode='outlined'
            style={styles.inputField}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
          />
          {touched.email && errors.email &&
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