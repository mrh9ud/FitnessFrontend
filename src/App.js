import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper'
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import MainNavigator from "./navigations/MainNavigator";


const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </Provider>
  );
}

export default App