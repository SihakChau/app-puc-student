import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JoinUsComponent from '../../screens/AccountStack/JoinUs';

class JoinUsContainer extends Component {
  render() {
    return <JoinUsComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinUsContainer);
