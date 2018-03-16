import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendPasswordResetEmail } from '../../actions/authAction';
import ForgotPasswordComponent from '../../screens/AccountStack/ForgotPassword';

class ForgotPasswordContainer extends Component {
  render() {
    return <ForgotPasswordComponent {...this.props} />;
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
        sendPasswordResetEmail,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
