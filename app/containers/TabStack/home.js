import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeComponent from '../../screens/TabStack/Home';

export class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
