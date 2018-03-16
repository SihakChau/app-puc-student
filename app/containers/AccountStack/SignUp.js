import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signUpWithEmail } from '../../actions/authAction';
import SignUpComponent from '../../screens/AccountStack/SignUp';

class SignUpContainer extends Component {
  render() {
    return <SignUpComponent {...this.props} />;
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
        signUpWithEmail,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
