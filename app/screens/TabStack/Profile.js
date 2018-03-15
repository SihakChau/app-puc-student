import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, Platform } from 'react-native';

import { COLORS, ICONS } from '../../modules';

class ProfileComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ProfileComponent;
