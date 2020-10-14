import MainContainer from "../containers/MainContainer";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {createDrawerNavigator} from "@react-navigation/drawer";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";

const MainNavigator = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainContainer}/>
        <Drawer.Screen name="Login" component={LoginForm}/>
        <Drawer.Screen name="Register" component={RegisterForm}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator