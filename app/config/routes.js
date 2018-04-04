import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import LoginScreen from '../containers/AccountStack/Login';
import JoinUsScreen from '../containers/AccountStack/JoinUs';
import SignUpScreen from '../containers/AccountStack/SignUp';
import ForgotPasswordScreen from '../containers/AccountStack/ForgotPassword';

import TestRegistrationScreen from '../containers/ProgramStack/TestRegistration';
import ListAllTestingScreen from '../containers/ProgramStack/ListAllTestingScreen';
import PaymentScreen from '../containers/ProgramStack/Payment';

import HomeScreen from '../containers/TabStack/Home';
import ProgramsScreen from '../containers/TabStack/Programs';
import ProfileScreen from '../containers/TabStack/Profile';
import NotificationsScreen from '../containers/TabStack/Notifications';
import SettingsScreen from '../containers/TabStack/Settings';

import TranscriptScreen from '../screens/TabStack/ProgramsComponent/transcript';

const AccountStack = StackNavigator({
  JoinUsScreen: { screen: JoinUsScreen, navigationOptions: { header: null } },
  LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
  SignUpScreen: { screen: SignUpScreen, navigationOptions: { header: null } },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen, navigationOptions: { header: null } },
});

const ProgramStack = StackNavigator({
  ProgramsScreen: { screen: ProgramsScreen, navigationOptions: { header: null } },
  PaymentScreen: { screen: PaymentScreen, navigationOptions: { header: null } },
  TestRegistrationScreen: { screen: TestRegistrationScreen, navigationOptions: { header: null } },
  ListAllTestingScreen: { screen: ListAllTestingScreen, navigationOptions: { header: null } },
  TranscriptScreen : { screen : TranscriptScreen, navigationOptions: { header: null }  }
});

const HomeStack = StackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { header: null } },
});

const ProfileStack = StackNavigator({
  ProfileScreen: { screen: ProfileScreen, navigationOptions: { header: null } },
});

const NotificationsStack = StackNavigator({
  NotificationsScreen: { screen: NotificationsScreen, navigationOptions: { header: null } },
});

const SettingsStack = StackNavigator({
  SettingsScreen: { screen: SettingsScreen, navigationOptions: { header: null } },
});

const TabStack = TabNavigator(
  {
    HomeTab: { screen: ProgramStack },
    // ProgramTab: { screen: ProgramStack },
    ProfileTab: { screen: ProfileStack },
    NotificationsTab: { screen: NotificationsStack },
    SettingsTab: { screen: SettingsStack },
  },
  {
    initialRouteName: 'HomeTab',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: '#3080e8',
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

export const AppNavigator = StackNavigator({
  TabStack: { screen: TabStack, navigationOptions: { header: null } },
  AccountStack: { screen: AccountStack, navigationOptions: { header: null } },
});

export const navMiddleware = createReactNavigationReduxMiddleware('root', (state) => state.nav);
const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(NavigationActions.init());
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
