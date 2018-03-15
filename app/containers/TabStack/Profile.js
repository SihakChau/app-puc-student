import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileComponent from '../../screens/TabStack/Profile';

class ProfileContainer extends Component {
  render() {
    return <ProfileComponent {...this.props} />;
  }
}

ProfileContainer.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'My Account',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-contact' : 'ios-contact-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
