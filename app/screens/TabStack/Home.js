import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, Platform } from 'react-native';

import { COLORS, ICONS } from '../../modules';

class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeComponent;
