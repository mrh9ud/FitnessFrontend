import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../forms/users/LoginForm";
import React from "react";
import RegisterForm from "../forms/users/RegisterForm";
import ResetPasswordForm from "../forms/users/ResetPasswordForm";
import PageLoading from "../components/PageLoading"
import { connect } from 'react-redux'

const Stack = createStackNavigator()

const AuthStack = ({ navigation, loading }) => {
  const rootNavigation = {
    rootNavigation: navigation
  }

    return (
      <>
      {loading
      ?
      <PageLoading />
      :
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} initialParams={{...rootNavigation}} />
        <Stack.Screen name="New Account" component={RegisterForm} />
        <Stack.Screen name="Reset Password" component={ResetPasswordForm} initialParams={{...rootNavigation}}/>
      </Stack.Navigator>
      }
      </>
    )
}

const mapStateToProps = store => ({ loading: store.loading })

export default connect(mapStateToProps)(AuthStack)