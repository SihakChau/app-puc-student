import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Button from 'apsl-react-native-button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import InputField from '../../components/InputField';
import { validateEmail } from '../../utils/validation';
import { COLORS, ICONS } from '../../modules';

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPWD: '',
    };

    this._handleSignUpWithEmail = this._handleSignUpWithEmail.bind(this);
  }

  _handleSignUpWithEmail() {
    const { email, password, confirmPWD } = this.state;

    if (email === '' || !validateEmail(email)) {
      alert('Please enter a valid email!');
    } else if (confirmPWD !== password) {
      alert('Please check your password again!');
    } else if (email === '' && password === '') {
      alert('Please enter a valid email or password!');
    } else if (validateEmail(email) && password !== '') {
      this.props.actions.signUpWithEmail(email, password);
    } else {
      alert('Please check your email and password!');
    }
  }

  render() {
    const isLoading = this.props.loading;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.close} onPress={() => this.props.navigation.goBack(null)}>
            <SimpleLineIcons name="arrow-left" size={17} color={COLORS.INPUT_TEXT} />
          </TouchableOpacity>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyWrapper}>
            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle, { marginBottom: 20 }]}
              label="Email"
              value={this.state.email}
              type="email-address"
              onChangeText={(text) => this.setState({ email: text })}
            />

            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={[styles.inputStyle, { marginBottom: 20 }]}
              label="Password"
              value={this.state.password}
              secureTextEntry
              onChangeText={(pwd) => this.setState({ password: pwd })}
            />

            <InputField
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
              label="Confirmation Password"
              value={this.state.confirmPWD}
              secureTextEntry
              onChangeText={(pwd) => this.setState({ confirmPWD: pwd })}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            style={styles.loginButton}
            onPress={this._handleSignUpWithEmail}
            isLoading={isLoading}
            isDisabled={isLoading}
            activeOpacity={0.7}>
            <View>
              <Text style={styles.loginButtonTitle}>SIGN UP</Text>
            </View>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  header: {
    backgroundColor: COLORS.BLANK,
    paddingHorizontal: 10,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  bodyWrapper: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  inputStyle: {
    color: COLORS.INPUT_TEXT,
    borderBottomWidth: 1,
    borderBottomColor: '#CDD7E0',
    borderRadius: 0,
    backgroundColor: COLORS.BLANK,
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
    color: COLORS.LABEL,
  },
  loginButton: {
    backgroundColor: COLORS.BLUE,
    borderRadius: 50,
    borderWidth: 0,
    marginBottom: 0,
    height: 45,
  },
  loginButtonTitle: {
    color: COLORS.WHITE,
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    paddingHorizontal: 40,
    paddingBottom: 15,
    alignItems: 'center',
  },
  link: {
    paddingVertical: 5,
  },
  textLink: {
    backgroundColor: COLORS.BLANK,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
    color: COLORS.BLUE,
    marginTop: 10,
  },
});

export default SignUpComponent;
