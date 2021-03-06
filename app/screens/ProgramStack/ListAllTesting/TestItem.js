import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Image,
  Dimensions,
  findNodeHandle,
  StyleSheet,
  Platform,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import moment from 'moment';

import { COLORS, ICONS } from '../../../modules';

class TestItem extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    const { latinname, testtype, admissiondate, mobilephone, serialid } = this.props;
    return (
      <TouchableOpacity style={styles.card} activeOpacity={1}>
        <Image
          style={styles.bgImage}
          ref={(img) => {
            this.backgroundImage = img;
          }}
          onLoadEnd={this.imageLoaded.bind(this)}
          source={ICONS.SHOT}
        />
        <Text style={[styles.h4]}>Serial: {serialid}</Text>
        <Text style={[styles.h4, styles.pt0]}>{testtype}</Text>
        <View style={styles.f1} />
        <View style={styles.footer}>
          <BlurView style={styles.absolute} viewRef={this.state.viewRef} blurType="light" blurAmount={30} />
          <Text style={styles.h6}>{latinname}</Text>
          <Text style={styles.subtitle}>
            Admission date {moment(admissiondate).format('MMMM, DD, YYYY')}, Payment 10,000 Riel. Your contact number{' '}
            {mobilephone}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const entryBorderRadius = 6;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const iwidth = viewportWidth / 2;
const colors = {
  black: '#1a1917',
  gray: '#888888',
  white: '#fff',
  background1: '#B721FF',
  background2: '#21D4FD',
  blue: '#000066',
  red: '#CC0000',
  apple: '#0f0f0f',
  dark: '#333',
  primary: '#f50057',
  postButton: ['#FF6666', '#FF4C4C', '#FD2B2E'],
  videosButton: ['#48CB4F', '#2DB831', '#14A51A'],
  voiceButton: ['#4CC9FF', '#42BAFD', '#35A6FE'],
  photoButton: ['#FFC91F', '#FFB41A', '#FF9F17'],
  favoritesButton: ['#AA77FE', '#936EFD', '#8166FE'],
  dotActive: '#666',
  dot: '#d6d6d6',
  backgroundPrimary: '#F4F6FB',
  borderColor: '#F2F3F5',
  icon: '#D3D5D9',
};

const window = Dimensions.get('window');

const AVATAR_SIZE = 100;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    paddingLeft: 20,
    paddingRight: 20,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F5',
    paddingTop: 25,
  },
  stickySectionText: {
    fontSize: 16,
    margin: 10,
    color: colors.apple,
    fontWeight: '800',
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.white,
    fontSize: 38,
    fontWeight: '800',
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
    fontWeight: '800',
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
    fontWeight: '600',
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: colors.white,
    borderColor: '#F2F3F5',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  swip: {
    marginBottom: 10,
  },
  rowText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.apple,
  },
  arrowBackNoTitle: {
    padding: 10,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  paddingBox: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  signUp: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F5',
  },
  header: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 29,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: AVATAR_SIZE / 2,
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
  pt0: {
    paddingTop: 0,
  },
  h4: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 0,
    borderRadius: 10,
    paddingHorizontal: 20,
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

export default TestItem;
