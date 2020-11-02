import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper'
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import { NavigationContainer } from "@react-navigation/native";
import SwitchNavigator from "./navigators/SwitchNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <SwitchNavigator/>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App