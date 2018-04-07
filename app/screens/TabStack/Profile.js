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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import GridMenu from '../../components/gridMenu';

import { COLORS, ICONS, APPEARANCES } from '../../modules';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }
  componentDidMount() {
    this.props.actions.fetchProfile()
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
    const { current_user, profile } = this.props;
    return (
      <ParallaxScrollView
        headerBackgroundColor={COLORS.WHITE}
        contentBackgroundColor={COLORS.BACKGROUND}
        backgroundColor={COLORS.WHITE}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderBackground={() => (
          <View
            key="background">
            <Image ref={(img) => { this.backgroundImage = img; }}
              onLoadEnd={this.imageLoaded.bind(this)}
              source={ICONS.JOIN_US_BG}
              style={{ width: window.width, height: PARALLAX_HEADER_HEIGHT - USER_PHOTO_SIZE / 0.7 }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: PARALLAX_HEADER_HEIGHT - USER_PHOTO_SIZE / 0.7,
              }}
            />
          </View>
        )}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <View style={styles.parallaxHeaderContainer}>
              <TouchableOpacity style={styles.userPicContainer}>
                <Image
                  resizeMode='center'
                  style={styles.userPic} source={require('../../assets/image/me.jpg')} />
              </TouchableOpacity>
              <Text style={styles.userName}>{profile.nameEng}</Text>
              <Text style={styles.major}>Bachelor of Computer Science</Text>
              <TouchableOpacity style={styles.updateInfo}>
                <Icons name='note' style={styles.updateIcon} />
                <Text style={styles.updateInfomation}>Update info</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>My Account</Text>
          </View>
        )}>

        <View style={styles.ButtonContainer}>
          <View style={styles.myTasks}>
            <TouchableOpacity style={styles.headerButton}>
              <Icons name='calendar' style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Schedules</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Icons name='layers' style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Curriculum</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Icons name='chart' style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Transcript</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Icons name='wallet' style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Payments</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentParallax}>
          <GridMenu
            border={false}
            itemMargin={APPEARANCES.UNIT_MARING}
            itemPaddingVertical={20}
            itemPaddingHorizontal={20}
            gridMarginVertival={5}
            gridMarginHorizontal={15}
            iconSize={48}
            fontSize={11}
            Label1={'Edit Profile'}
            BTN1={'settings'}
            BTN2={'ios-contacts'}
            Label2={'Followers'}
            BTN3={'md-school'}
            Label3={'Academic Program'}
            BTN4={'md-stats'}
            Label4={'Institutes & Centers'}
            BTN5={'logo-buffer'}
            Label5={'Short Course'}
            BTN6={'md-bulb'}
            Label6={'Event'}

            onBTN1={() => console.log('1')}
            onBTN2={() => console.log('2')}
            onBTN3={() => console.log('3')}
            onBTN4={() => console.log('4')}
            onBTN5={() => console.log('5')}
          />
        </View>
      </ParallaxScrollView>
    );
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const colors = {
  backgroundPrimary: COLORS.BACKGROUND,
};
const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 500;
const STICKY_HEADER_HEIGHT = 70;
const USER_PHOTO_SIZE = 130;

const styles = StyleSheet.create({
  updateInfo: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: COLORS.BLUE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
    marginBottom:20,
  },
  major: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.DARK_GREY,
    marginBottom:10,
  },
  updateInfomation: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.BLUE,
  },
  updateIcon: {
    fontSize: 16,
    color: COLORS.BLUE,
    marginRight: 5,
  },
  creadit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.DARK_GREY
  },
  contentParallax: {
    backgroundColor: COLORS.BACKGROUND,
    paddingBottom:50,
  },
  subjectText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.FBCOLOR,
    textAlign: 'center',
  },
  myTasks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: COLORS.FBBORDER,
    borderBottomWidth: 1,
    borderTopColor: COLORS.FBBORDER,
    borderTopWidth: 1,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
  },
  creditContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    borderBottomColor: COLORS.FBBORDER,
    borderBottomWidth: 1,
    borderTopColor: COLORS.FBBORDER,
    borderTopWidth: 1,
    marginBottom: 15,
  },
  parallaxHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    padding: 10,
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.DARK_GREY
  },

  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 22,
    color: COLORS.FBCOLOR,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.FBCOLOR
  },

  borderButtonContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.BORDER,
  },
  userPic: {
    marginTop: 250,
    width: USER_PHOTO_SIZE,
    height: USER_PHOTO_SIZE,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    borderRadius: 4,
  },

  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F5',
    paddingTop: 25,
  },
  stickySectionText: {
    fontSize: 16,
    margin: 10,
    color: COLORS.DARK_GREY,
    fontWeight: '600',
  },
  parallaxHeader: {
    flexDirection: 'column',
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    marginVertical: 20,
    flex:1,
  }
});

export default ProfileComponent;
