import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { fetchTest } from '../../actions/testRegistrationAction';
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
  return {
    isLoading: state.testRegistrationReducer.get('loading'),
    data: state.testRegistrationReducer.get('data'),
    user: state.authReducer.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchTest }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
