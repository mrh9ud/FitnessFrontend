import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from "../../screens/auth/AuthLoadingScreen";
import MainNavigator from "../main/MainNavigator";
import AuthStack  from "./AuthStack"

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: MainNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
)