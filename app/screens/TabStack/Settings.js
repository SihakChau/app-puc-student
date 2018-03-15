import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, Platform } from 'react-native';

import { COLORS, ICONS } from '../../modules';

class SettingsComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Component</Text>
        <Button title="SIGN OUT" onPress={() => this.props.actions.logout()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SettingsComponent;
