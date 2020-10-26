import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import { AuthStack } from "./AuthStack";
import TestDrawerNavigator from "./TestDrawerNavigator";

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