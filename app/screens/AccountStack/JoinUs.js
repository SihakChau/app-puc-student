import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, StyleSheet, Platform, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { COLORS, ICONS } from '../../modules';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class JoinUsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={ICONS.JOIN_US_BG} />
        <View style={styles.banner}>
          <Image style={styles.logo} source={ICONS.LOGO} />
          <Text style={styles.name}>Paññāsāstra University</Text>
          <Text style={styles.name}>of</Text>
          <Text style={styles.name}>Cambodia</Text>
        </View>
        <View style={styles.joinus}>
          <Text style={styles.joinwith}>Join us with</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.buttonBlue} onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Ionicons name="mail-outline" color="#fff" size={22} />
              <Text style={styles.textButtonBlue}>Mail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="facebook" color="#4267B2" size={20} />
              <Text style={styles.textButton}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="phone" color="#5DCB42" size={20} />
              <Text style={styles.textButton}>Phone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
              <Text style={styles.textLink}>Forget password?</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.copyright}>Copyright © 2018 Paññāsāstra University of Cambodia.</Text>
          <Text style={styles.copyright}>All Rights Reserved.</Text>
        </View>
      </View>
    );
  }
}

const colors = {
  white: '#fff',
  text: '#0f0f0f',
  dark: '#333',
  blue: '#228AE6',
  background: '#F4F6FB',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bgImage: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: viewportWidth,
    height: viewportHeight,
    resizeMode: 'cover',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: colors.white,
    backgroundColor: 'transparent',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 10,
  },
  joinus: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinwith: {
    color: 'rgba(255,255,255,.7)',
    backgroundColor: 'transparent',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 10,
    marginBottom: 10,
  },
  actions: {
    width: '60%',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,.3)',
    borderWidth: 1,
    borderColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonBlue: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
    flex: 1,
    textAlign: 'center',
    paddingRight: 22,
  },
  textButton: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
    flex: 1,
    textAlign: 'center',
    paddingRight: 20,
  },
  link: {
    paddingVertical: 5,
  },
  textLink: {
    backgroundColor: 'transparent',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    color: colors.white,
  },
  copyright: {
    backgroundColor: 'transparent',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
  },
  f1: {
    flex: 1,
  },
});
