import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  findNodeHandle,
  StyleSheet,
  Platform,
} from 'react-native';
import { BlurView } from 'react-native-blur';

import { COLORS, ICONS } from '../../modules';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class ProgramsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing_data: [],
      viewRef: null,
    };
  }

  componentWillMount() {
    this.props.actions.fetchTest();
  }

  componentWillReceiveProps(nextProps) {
    const { testing_data } = nextProps;
    this.setState({
      testing_data,
    });
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    const { testing_data } = this.state;
    const { current_user } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Programs</Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.groupHeader}>
            <Text style={styles.h5}>GET START</Text>
          </View>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('TestRegistrationScreen')}>
            <Image
              style={styles.bgImage}
              ref={(img) => {
                this.backgroundImage = img;
              }}
              onLoadEnd={this.imageLoaded.bind(this)}
              source={ICONS.EDUCATION}
            />

            <Text style={styles.h4}>Commitment to Excellence</Text>
            <View style={styles.f1} />
            <View style={styles.footer}>
              <BlurView style={styles.absolute} viewRef={this.state.viewRef} blurType="light" blurAmount={30} />
              <Text style={styles.h6}>Register Test</Text>
              <Text style={styles.subtitle}>
                Improving your quality of life and building the capacity with us. Join with our university here!
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const colors = {
  white: '#fff',
  text: '#0f0f0f',
  dark: '#333',
  blue: '#228AE6',
  background: '#F4F6FB',
  border: '#F0F0F5',
  hColor: '#2E3B53',
  gray: '#555',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  groupHeader: {
    marginVertical: 20,
  },
  h5: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  h6: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.hColor,
    backgroundColor: 'transparent',
  },
  h4: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    padding: 20,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 0,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: '#CFCCDC',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 15,
    shadowOpacity: 0.9,
    elevation: 15,
    position: 'relative',
    marginBottom: 20,
    height: 350,
    flexDirection: 'column',
  },
  bgImage: {
    width: viewportWidth - 80,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    height: 350,
    borderRadius: 10,
    top: 0,
    left: 10,
    bottom: 0,
    right: 10,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  footer: {
    padding: 20,
    flex: 1,
  },
  f1: {
    flex: 1,
  },
  subtitle: {
    color: colors.dark,
    backgroundColor: 'transparent',
    fontSize: 15,
    marginTop: 10,
  },
});

export default ProgramsComponent;
