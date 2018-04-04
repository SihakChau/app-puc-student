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
import GridMenu from '../../components/gridMenu';

import { COLORS, ICONS , APPEARANCES} from '../../modules';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
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
    const { current_user } = this.props;
    return (
      <ParallaxScrollView
        headerBackgroundColor="#fff"
        contentBackgroundColor={colors.backgroundPrimary}
        backgroundColor={colors.backgroundPrimary}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderBackground={() => (
          <View
            key="background">
            <Image
              ref={(img) => {
                this.backgroundImage = img;
              }}
              onLoadEnd={this.imageLoaded.bind(this)}
              source={ICONS.JOIN_US_BG}
              style={{ width: window.width, height: PARALLAX_HEADER_HEIGHT - 200 }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: PARALLAX_HEADER_HEIGHT - 200,
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
              <Text style={styles.userName}>Sihak Chau</Text>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name='md-cog' style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name='ios-contacts' style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Followers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name='md-list-box' style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Activity</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name='md-grid' style={styles.buttonIcon} />
                <Text style={styles.buttonText}>My schedule</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>My Account</Text>
          </View>
        )}>
          <GridMenu
               itemMargin={APPEARANCES.UNIT_MARING}
               itemPaddingVertical={20}
               itemPaddingHorizontal={20}
               gridMarginVertival={5}
               gridMarginHorizontal={15}
               iconSize={48}
               fontSize={11}
               Label1 = {'Edit Profile'}
               BTN1={'settings'}
               BTN2={'ios-contacts'}
               Label2 = {'Followers'}            
               BTN3={'md-school'}
               Label3 = {'Academic Program'}            
               BTN4={'md-stats'}
               Label4 = {'Institutes & Centers'}            
               BTN5={'logo-buffer'}
               Label5 = {'Short Course'}                        
               BTN6={'md-bulb'}
               Label6 = {'Event'}         
 
             onBTN1={() => console.log('1')}
             onBTN2={() => console.log('2')}
             onBTN3={() => console.log('3')}
             onBTN4={() => console.log('4')}
             onBTN5={() => console.log('5')}
           />
      </ParallaxScrollView>
    );
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const colors = {
  backgroundPrimary: '#fff',
};
const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 450;
const STICKY_HEADER_HEIGHT = 70;
const USER_PHOTO_SIZE = 130;

const styles = StyleSheet.create({
  parallaxHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    padding: 10,
    fontSize: 22,
    fontWeight: '300',
  },
  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 32,
    color: COLORS.BLUE,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
    color: '#333'
  },
  ButtonContainer: {
    paddingHorizontal: 15,
    marginTop: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,

  },
  userPic: {
    marginTop: 200,
    width: USER_PHOTO_SIZE,
    height: USER_PHOTO_SIZE,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    borderRadius: 55,

  },

  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLUE,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F5',
    paddingTop: 25,
  },
  stickySectionText: {
    fontSize: 16,
    margin: 10,
    color: COLORS.WHITE,
    fontWeight: '300',
  },
  parallaxHeader: {
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default ProfileComponent;
