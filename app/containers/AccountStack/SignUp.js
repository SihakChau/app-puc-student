import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUpComponent from '../../screens/AccountStack/SignUp';

class SignUpContainer extends Component {
  render() {
    return <SignUpComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
