import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Appbar, TextInput, Button } from "react-native-paper";
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { verifyUserData } from '../redux/actions/actionCreators'

const LoginForm = props => {
  const { exampleInfo } = props.route.params

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title='Login' subtitle='Submit Login Info' />
        <Appbar.Action icon='magnify' />
        <Appbar.Action icon='dots-vertical' />
        <Text>{exampleInfo}</Text>
      </Appbar.Header>

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
          <Button 
            mode="contained" 
            onPress={handleSubmit}
            >Submit
          </Button>
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
  }
})

const mapDispatchToProps = dispatch =>  ({ verifyUserData: (userData) => dispatch(verifyUserData(userData)) })

export default connect(null, mapDispatchToProps)(LoginForm)