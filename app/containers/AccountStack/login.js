import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginWithEmail } from '../../actions/authAction';
import LoginComponent from '../../screens/AccountStack/Login';

class LoginContainer extends Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authReducer.get('loading'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loginWithEmail,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
