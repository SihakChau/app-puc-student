import React, { Component } from 'react';
import { View, Text,StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';

import './ReactotronConfig';
import AppWithNavigationState from './app/config/routes';
import LoadingComponent from './app/components/Loading';
import { requestLoginSuccess } from './app/actions/authAction';

class PucMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      initialComponent: <LoadingComponent />,
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        this.setState({ loaded: true, initialComponent: <AppWithNavigationState /> });
      }, 1000);
      if (user) {
        this.props.actions.requestLoginSuccess(user);
        this.props.navigateTo('TabStack');
      } else {
        this.props.navigateTo('AccountStack');
      }
    });
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content"/>
        {this.state.initialComponent}
      </View>
    ) 
  }
}

function mapDispatchToProps(dispatch) {
  const resetAction = (routeName) =>
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
      key: null,
    });

  return {
    actions: bindActionCreators({ requestLoginSuccess }, dispatch),
    navigateTo: (routeName) => dispatch(resetAction(routeName)),
  };
}

export default connect(null, mapDispatchToProps)(PucMobile);
