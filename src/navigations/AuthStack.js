import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../forms/LoginForm";
import React from "react";

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginForm} />
        </Stack.Navigator>
    )
}

export { AuthStack }