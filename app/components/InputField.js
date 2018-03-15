import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput, Platform } from 'react-native';

class InputField extends Component {
  render() {
    const {
      label,
      value,
      type,
      onChangeText,
      secureTextEntry,
      labelStyle,
      inputStyle,
      containerStyle,
      editable,
    } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <TextInput
          style={[styles.textInput, inputStyle]}
          value={value}
          keyboardType={type}
          onChangeText={onChangeText}
          autoCorrect={false}
          autoCapitalize="none"
          editable={editable}
          underlineColorAndroid="rgba(0,0,0,0)"
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
};

InputField.defaultProps = {
  label: 'Please Change Label',
  secureTextEntry: false,
  editable: true,
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 3,
    marginTop: 2,
    marginBottom: 10,
    color: '#3A5271',
    ...Platform.select({
      ios: {
        shadowColor: '#ABCFEB',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  label: {
    color: '#0f0f0f',
    backgroundColor: 'transparent',
  },
});

export default InputField;
