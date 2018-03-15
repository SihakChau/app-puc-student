import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import ProgramsComponent from '../../screens/TabStack/Programs';

class ProgramsContainer extends Component {
  render() {
    return <ProgramsComponent {...this.props} />;
  }
}

ProgramsContainer.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Programs',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} size={32} color={tintColor} />
  ),
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsContainer);
