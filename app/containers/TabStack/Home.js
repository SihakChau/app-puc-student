import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeComponent from '../../screens/TabStack/Home';

class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}

HomeContainer.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-compass' : 'ios-compass-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {
    current_user: state.authReducer.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
