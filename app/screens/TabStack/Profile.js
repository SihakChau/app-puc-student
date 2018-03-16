import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  findNodeHandle,
  Platform,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS, ICONS } from '../../modules';
import TestItem from './testItem';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.actions.fetchTest(user);
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  _flatHeader = () => {
    return <View style={{ height: 20, width: '100%' }} />;
  };
  _flatSeparator = () => {
    return <View style={{ height: 8, width: '100%', backgroundColor: colors.backgroundPrimary }} />;
  };
  _flatFooter = () => {
    return (
      <View
        style={{
          height: 50,
        }}
      />
    );
  };

  render() {
    const { data, user } = this.props;
    return (
      <ParallaxScrollView
        headerBackgroundColor="#DEE4F0"
        contentBackgroundColor={colors.backgroundPrimary}
        backgroundColor={colors.backgroundPrimary}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image
              ref={(img) => {
                this.backgroundImage = img;
              }}
              onLoadEnd={this.imageLoaded.bind(this)}
              source={ICONS.JOIN_US_BG}
              style={{ width: window.width, height: PARALLAX_HEADER_HEIGHT }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: PARALLAX_HEADER_HEIGHT,
              }}
            />
          </View>
        )}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user.displayName}</Text>
            </View>
            <Text style={styles.sectionSpeakerText}>{user.email}</Text>
            <Text style={styles.sectionTitleText}>{user.phoneNumber}</Text>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>My Account</Text>
          </View>
        )}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          ListFooterComponent={this._flatFooter}
          ListHeaderComponent={this._flatHeader}
          ItemSeparatorComponent={this._flatSeparator}
          keyboardShouldPersistTaps="always"
          renderItem={({ item }) => <TestItem {...this.props} {...item} id={item.key} />}
        />

        <TouchableOpacity style={styles.item} activeOpacity={1}>
          <Text style={styles.itemText}>Account</Text>
          <View style={styles.fbox} />
          <Icon name="ios-arrow-forward-outline" style={styles.itemIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} activeOpacity={1}>
          <Text style={styles.itemText}>Language</Text>
          <View style={styles.fbox} />
          <Icon name="ios-arrow-forward-outline" style={styles.itemIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} activeOpacity={1}>
          <Text style={styles.itemText}>About</Text>
          <View style={styles.fbox} />
          <Icon name="ios-arrow-forward-outline" style={styles.itemIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} activeOpacity={1}>
          <Text style={styles.itemText}>Policies</Text>
          <View style={styles.fbox} />
          <Icon name="ios-arrow-forward-outline" style={styles.itemIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} activeOpacity={1}>
          <Text style={styles.itemText}>Contact Us</Text>
          <View style={styles.fbox} />
          <Icon name="ios-arrow-forward-outline" style={styles.itemIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} activeOpacity={1}>
          <Text style={styles.itemText}>Developer</Text>
          <View style={styles.fbox} />
          <Icon name="ios-arrow-forward-outline" style={styles.itemIcon} />
        </TouchableOpacity>
      </ParallaxScrollView>
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
  signout: {
    marginTop: 20,
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.apple,
  },
  itemIcon: {
    fontSize: 24,
    color: colors.icon,
  },
  containt: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  fbox: {
    flex: 1,
  },
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
    marginHorizontal: 20,
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

export default ProfileComponent;
