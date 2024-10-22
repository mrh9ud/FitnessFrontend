import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../../forms/users/LoginForm";
import React from "react";
import RegisterForm from "../../forms/users/RegisterForm";
import ResetPasswordForm from "../../forms/users/ResetPasswordForm";
import LoginPageLoading from "../../components/LoginPageLoading"

const Stack = createStackNavigator()

const AuthStack = ({ navigation }) => {
  const rootNavigation = {
    rootNavigation: navigation
  }

    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="New Account" component={RegisterForm} />
        <Stack.Screen 
          name="Reset Password" 
          component={ResetPasswordForm} 
          initialParams={{...rootNavigation}} 
        />
        <Stack.Screen 
          name="Loading" 
          component={LoginPageLoading} 
          options={{ headerShown: false, animationEnabled: false }}
          initialParams={{...rootNavigation}} 
        />
      </Stack.Navigator>
    )
}

export default AuthStack