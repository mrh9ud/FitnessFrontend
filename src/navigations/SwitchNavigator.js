import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import TestDrawerNavigator from "./MainNavigator";
import { AuthStack } from "./AuthStack";

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: TestDrawerNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
)