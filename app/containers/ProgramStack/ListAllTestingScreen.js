import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import ListAllTestingComponent from '../../screens/ProgramStack/ListAllTesting';

class ListAllListAllTesting extends Component {
  render() {
    return <ListAllTestingComponent {...this.props} />;
  }
}

ListAllListAllTesting.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Programs',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} size={32} color={tintColor} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ListAllListAllTesting);
