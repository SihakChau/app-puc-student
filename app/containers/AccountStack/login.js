import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginComponent from '../../screens/AccountStack/Login';

export class LoginContainer extends Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
