import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import LoginScreen from '../containers/AccountStack/Login';

import HomeScreen from '../containers/TabStack/Home';

const AccountStack = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'LoginScreen',
    cardStyle: {
      backgroundColor: '#fff',
    },
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const ProgramStack = StackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { header: null } },
});

const TabStack = TabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    ProgramsScreen: { screen: ProgramStack },
  },
  {
    initialRouteName: 'HomeScreen',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: '#228AE6',
      inactiveTintColor: '#b6b6b6',
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F5',
        backgroundColor: '#fff',
        paddingTop: 5,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      },
    },
  }
);

export const AppNavigator = StackNavigator(
  {
    TabStack: { screen: TabStack, navigationOptions: { header: null } },
    AccountStack: { screen: AccountStack, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'TabStack',
    cardStyle: {
      backgroundColor: '#fff',
    },
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export const navMiddleware = createReactNavigationReduxMiddleware('root', (state) => state.nav);

const addListener = createReduxBoundAddListener('root');

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav,
      addListener,
    })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
