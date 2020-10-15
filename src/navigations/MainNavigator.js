import MainContainer from "../containers/MainContainer";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {createDrawerNavigator} from "@react-navigation/drawer";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import  { connect } from 'react-redux'

const MainNavigator = props => {

  const Drawer = createDrawerNavigator();

  return (
    <>
      {props.currentUser
      ?
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainContainer}/>
        </Drawer.Navigator>
      </NavigationContainer>
      :
      <LoginForm />
      }
    </>
  )
}

const mapStateToProps = store => { return ({ currentUser: store.currentUser })}

export default connect(mapStateToProps)(MainNavigator)