import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import NotificationsComponent from '../../screens/TabStack/Notifications';

class NotificationsContainer extends Component {
  render() {
    return <NotificationsComponent {...this.props} />;
  }
}

NotificationsContainer.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-notifications' : 'ios-notifications-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
