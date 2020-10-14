import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoginForm} />
      <Tab.Screen name="Register" component={RegisterForm} />
    </Tab.Navigator>
  )
}

export default TabNavigator