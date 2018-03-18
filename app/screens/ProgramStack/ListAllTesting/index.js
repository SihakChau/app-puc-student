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
  FlatList,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { COLORS, ICONS } from '../../../modules';
import LoadingComponent from '../../../components/Loading';
import TestItem from './TestItem';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class ListAllTesting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      viewRef: null,
    };
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    const { testing_data, title } = this.props.navigation.state.params;
    console.log(testing_data);
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBackNoTitle} onPress={() => this.props.navigation.goBack(null)}>
            <SimpleLineIcons style={styles.paddingIcon} name="arrow-left" size={19} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
          </View>
        </View>

        <ScrollView style={styles.container}>
          <TouchableOpacity
            style={[styles.card, { height: undefined }]}
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('TestRegistrationScreen')}>
            <View style={styles.footer}>
              <BlurView style={styles.absolute} viewRef={this.state.viewRef} blurType="light" blurAmount={30} />
              <Text style={styles.h6}>Register</Text>
              <Text style={styles.subtitle}>
                Improving your quality of life and building the capacity with us. Join with our university here!
              </Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={testing_data}
            keyExtractor={(item) => item.key}
            ListFooterComponent={this._flatFooter}
            ListHeaderComponent={this._flatHeader}
            ItemSeparatorComponent={this._flatSeparator}
            keyboardShouldPersistTaps="always"
            renderItem={({ item }) => <TestItem {...this.props} {...item} id={item.key} />}
          />
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
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: COLORS.BG,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
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

export default ListAllTesting;
