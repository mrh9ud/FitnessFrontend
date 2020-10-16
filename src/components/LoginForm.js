import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, Appbar, TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { verifyUserData } from '../redux/actions/actionCreators'

const LoginForm = ({ verifyUserData, navigation }) => {
  return (
    <View>
      <Formik 
        initialValues={{username: '', password: ''}}
        onSubmit={(values) => verifyUserData(values)}
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
  }
})

const mapDispatchToProps = dispatch => { return ({ verifyUserData: (userData) => dispatch(verifyUserData(userData)) }) }

export default connect(null, mapDispatchToProps)(LoginForm)