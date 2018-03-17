import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { completedForm } from '../../actions/testRegistrationAction';
import { fetchTestTypes } from '../../actions/testTypeAction';
import TestingComponent from '../../screens/ProgramStack/TestRegistration';

class TestRegistrationContainer extends Component {
  render() {
    return <TestingComponent {...this.props} />;
  }
}

TestRegistrationContainer.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Programs',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {
    isLoading: state.testRegistrationReducer.get('loading'),
    data: state.testRegistrationReducer.get('data'),
    form: state.testRegistrationReducer.get('form'),
    user: state.authReducer.get('data'),
    testTypesData: state.testTypesReducer.get('data'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ completedForm, fetchTestTypes }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRegistrationContainer);
