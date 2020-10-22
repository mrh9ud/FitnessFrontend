import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from 'formik'
import { createNewUser } from '../redux/actions/actionCreators'
import { connect } from 'react-redux'
import { USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL } from '../helpers/FormKeyType'
import {accountInfoValidations} from "../helpers/Validations";

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
        validationSchema={accountInfoValidations}
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