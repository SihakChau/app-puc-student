import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, Platform } from 'react-native';

import { COLORS, ICONS } from '../../modules';

class NotificationComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notification Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default NotificationComponent;
