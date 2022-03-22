// @flow

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const AppContainer = (): React.Node => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
