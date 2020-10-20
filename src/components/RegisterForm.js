import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from 'formik'
import { createNewUser } from '../redux/actions/actionCreators'
import { connect } from 'react-redux'
import { USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL } from '../helpers/FormKeyType'
import * as yup from 'yup'

const RegisterForm = ({ createNewUser }) => {
  return (
    <ScrollView>
      <Formik
        initialValues={{
          [USERNAME]: '',
          [PASSWORD]: '',
          [FIRST_NAME]: '',
          [LAST_NAME]: '',
          [EMAIL]: '',
        }}
        onSubmit={values => createNewUser(values)}
        validationSchema={yup.object().shape({
          username: yup
            .string().required("username required")
            .min(4, "Must have at least 4 characters")
            .max(12, "No more than 12 characters")
            .matches(/^\S[A-Za-z0-9_]+$/g, {message: "No spaces or special characters", excludeEmptyString: true}),
          password: yup
            .string().required("password required")
            .min(6, "Must be at least 6 characters")
            .max(25, "No more than 25 characters")
            .matches(/^[\S]+$/g, {message: "No spaces permitted", excludeEmptyString: true}),
          first_name: yup
            .string().required("first name required")
            .min(2, "Must have at least 2 characters")
            .max(15, "No more than 15 characters")
            .matches(/^([A-Za-z](\s?|-|'))+[A-Za-z]$/g, {
              message: "No special characters or extra spaces",
              excludeEmptyString: true
            }),
          last_name: yup
            .string().required("last name required")
            .min(2, "Must have at least 2 characters")
            .max(20, "No more than 20 characters")
            .matches(/^([A-Za-z](\s?|-|'))+[A-Za-z]$/g, {message: "No special characters or spaces"}),
          email: yup
            .string().required("email required").email("Not a valid email")
        })}
      >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched, isValid, values}) => (
          <View>
            <TextInput
              label='Username'
              mode='outlined'
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
              style={styles.inputField}
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && errors.password &&
            <Text style={styles.error}>{errors.password}</Text>
            }
            <TextInput
              label='First Name'
              mode='outlined'
              style={styles.inputField}
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              onBlur={() => setFieldTouched('first_name')}
            />
            {touched.first_name && errors.first_name &&
            <Text style={styles.error}>{errors.first_name}</Text>
            }
            <TextInput
              label='Last Name'
              mode='outlined'
              style={styles.inputField}
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              onBlur={() => setFieldTouched('last_name')}
            />
            {touched.last_name && errors.last_name &&
            <Text style={styles.error}>{errors.last_name}</Text>
            }
            <TextInput
              label='Email'
              mode='outlined'
              style={styles.inputField}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email &&
            <Text style={styles.error}>{errors.email}</Text>
            }
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