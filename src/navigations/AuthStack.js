import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../forms/LoginForm";
import React from "react";
import RegisterForm from "../forms/RegisterForm";

const Stack = createStackNavigator()

const AuthStack = ( { navigation } ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" >
              {(props) => <LoginForm props={props} rootNavigation={navigation} />}
            </Stack.Screen>
          <Stack.Screen name="New Account" component={RegisterForm} />
        </Stack.Navigator>
    )
}

export { AuthStack }