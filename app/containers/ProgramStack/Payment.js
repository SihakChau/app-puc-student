import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { testRegistration } from '../../actions/testRegistrationAction';
import PaymentScreen from '../../screens/ProgramStack/Payment';

class PaymentContainer extends Component {
  render() {
    return <PaymentScreen {...this.props} />;
  }
}

PaymentContainer.navigationOptions = ({ navigation }) => ({
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ testRegistration }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
