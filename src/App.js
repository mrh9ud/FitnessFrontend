import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper'
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import SwitchNavigator from "./navigations/SwitchNavigator";
import TestSwitchNavigator from "./navigations/TestSwitchNavigator";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        {/*<SwitchNavigator />*/}
          <NavigationContainer>
              <TestSwitchNavigator/>
          </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App