import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './app/store/configureStore';

const store = configureStore();
Text.defaultProps.allowFontScaling = false;

export default class PucMobile extends Component {
  render() {
    return (
      <Provider store={store}>
      
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PucMobile', () => PucMobile);
