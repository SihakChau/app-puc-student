import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { fetchTest } from '../../actions/testRegistrationAction';
import ProgramsComponent from '../../screens/TabStack/Programs';

class ProgramsContainer extends Component {
  render() {
    return <ProgramsComponent {...this.props} />;
  }
}

ProgramsContainer.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Registration',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {
    testing_data: state.testRegistrationReducer.get('data'),
    current_user: state.authReducer.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchTest }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsContainer);
