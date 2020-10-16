import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import RegisterForm from '../components/RegisterForm'
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from 'react-redux'
import MainNavigator from './MainNavigator'

const Stack = createStackNavigator()

const AccountNavigator = ({ currentUser }) => {
    return (
			<>
			{currentUser
			?
			<MainNavigator />
			:
			<NavigationContainer>
					<Stack.Navigator>
							<Stack.Screen name="Login" component={LoginForm}/>
							<Stack.Screen name="New Account" component={RegisterForm} />
					</Stack.Navigator>
			</NavigationContainer>
			}
			</>
	)
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(AccountNavigator)