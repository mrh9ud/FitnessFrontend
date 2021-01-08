import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper'
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from './navigators/main/RootNavigation'
import SwitchNavigator from "./navigators/auth/SwitchNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'VirtualizedLists should never be nested'
]);


const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <SwitchNavigator/>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App