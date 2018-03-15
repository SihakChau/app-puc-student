import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { logout } from '../../actions/authAction';

import SettingsComponent from '../../screens/TabStack/Settings';

class SettingsContainer extends Component {
  render() {
    return <SettingsComponent {...this.props} />;
  }
}

SettingsComponent.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'More',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-menu' : 'ios-menu-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ logout }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);
