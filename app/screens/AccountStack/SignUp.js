import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Button from 'apsl-react-native-button';

import InputField from '../../components/InputField';

export class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body}>
          <View style={styles.bodyWrapper}>
            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle, { marginBottom: 40 }]}
              label="Enter Your Email: "
              value={this.state.email}
              type="email-address"
              onChangeText={(text) => this.setState({ email: text })}
            />

            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle, { marginBottom: 40 }]}
              label="Enter Your Password: "
              value={this.state.password}
              secureTextEntry
              onChangeText={(text) => this.setState({ password: text })}
            />

            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
              label="Confirm Your Password: "
              value={this.state.password}
              secureTextEntry
              onChangeText={(text) => this.setState({ password: text })}
            />

            <View style={styles.buttonWrapper}>
              <View style={styles.loginButtonWrapper}>
                <Button style={styles.loginButton} activeOpacity={0.7}>
                  <View>
                    <Text style={styles.loginButtonTitle}>Begin!</Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.signInLink}>Already have an account? SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 170,
    backgroundColor: '#7000E3',
  },
  body: {
    flex: 1,
    padding: 40,
  },
  bodyWrapper: {
    flex: 1,
  },
  inputStyle: {
    color: '#484E5D',
    borderBottomWidth: 1,
    borderBottomColor: '#CDD7E0',
    borderRadius: 0,
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowOpacity: 0,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  labelStyle: {
    color: '#9AA3B7',
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: 30,
  },
  loginButtonWrapper: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#7000E3',
    borderRadius: 50,
    borderWidth: 0,
    marginBottom: 0,
    height: 45,
  },
  loginButtonTitle: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  footer: {
    padding: 40,
    alignItems: 'center',
  },
  signInLink: {
    color: '#9AA3B7',
  },
});

export default SignUpComponent;
