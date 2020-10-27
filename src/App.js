import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper'
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import SwitchNavigator from "./navigators/SwitchNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SwitchNavigator />
      </PaperProvider>
    </Provider>
  );
}

export default App