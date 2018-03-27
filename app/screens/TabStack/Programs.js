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
  FlatList
} from 'react-native';
import { BlurView } from 'react-native-blur';

import { COLORS, ICONS, APPEARANCES } from '../../modules';
import LoadingComponent from '../../components/Loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from '../../components/carousel';
import GridMenu from '../../components/gridMenu';
import AcademicCard from '../../components/cards/academicCard';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import CardComponent from '../../components/cards';


class ProgramsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      testing_data: this.props,
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

  componentDidMount() {
    const self = this;
    setTimeout(function () {
      self.setState({
        loading: !self.state.loading,
      });
    }, 1000);
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }




  render() {
    const { loading, testing_data } = this.state;
    const totalTesting = testing_data.length;
    const TestingCard = [
      {
        id: 's01',
        type: 'ACADEMIC PROGRAM',
        faculty: 'Business and Economics',
        major: 'Business Information System',
        subject: 'Multimedia and Web Design',
        description: 'CBSE has introduced vocational subject on Multimedia and web technology to enhance the students knowledge on latest technologies and trends like HTML, DHTML, XML, CSS, JAVA Script, VB Script, ASP, Photoshop, Corel Draw etc. It not only increases the IT awareness but also gives the job opportunities in this field.',
      },
      {
        id: 's02',
        type: 'ACADEMIC PROGRAM',
        faculty: 'Business and Economics',
        major: 'Business Information System',
        subject: 'Multimedia and Web Design',
        description: 'CBSE has introduced vocational subject on Multimedia and web technology to enhance the students knowledge on latest technologies and trends like HTML, DHTML, XML, CSS, JAVA Script, VB Script, ASP, Photoshop, Corel Draw etc. It not only increases the IT awareness but also gives the job opportunities in this field.',
      }
    ];
    const data = [
      {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
      },
      {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
      },
      {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
      },
      {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
      },
      {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
      },
      {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
      }
    ];


    return (
      <View style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.tittleContainer}>
              <Text style={styles.subtitle}> Term No </Text>
              <Text style={styles.title}> Registration </Text>
            </View>
            <View style={styles.hBtnRightContainer} >
              <TouchableOpacity style={styles.IconContainer}>
                <Ionicons name='ios-search' style={styles.HBtnIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.IconContainer}>
                <Ionicons name='md-list-box' style={styles.HBtnIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.carouselContainer}>
            <View style={styles.halfBackGround}></View>
            <Carousel
              data={data}
            />

          </View>
          <GridMenu
            itemMargin={APPEARANCES.UNIT_MARING}
            itemPaddingVertical={20}
            itemPaddingHorizontal={20}
            gridMarginVertival={5}
            gridMarginHorizontal={15}
            iconSize={48}
            fontSize={11}

            BTN1={'playlist-add-check'}
            BTN2={'md-medal'}
            BTN3={'md-school'}
            BTN4={'md-stats'}
            BTN5={'logo-buffer'}
            BTN6={'md-bulb'}

            onBTN1={() => console.log('1')}
            onBTN2={() => console.log('2')}
            onBTN3={() => console.log('3')}
            onBTN4={() => console.log('4')}
            onBTN5={() => console.log('5')}
            onBTN6={() => console.log('6')}
          />
          <CardComponent
            data={TestingCard}
          />
        </ScrollView>
        {/* {loading ? (
          <LoadingComponent />
        ) : (
          <ScrollView style={styles.container}>
            <View style={styles.groupHeader}>
              <Text style={styles.h5}>GET START</Text>
            </View>

            {totalTesting >= 1 ? (
              <TouchableOpacity
                style={[styles.card, { height: undefined }]}
                activeOpacity={1}
                onPress={() =>
                  this.props.navigation.navigate('ListAllTestingScreen', {
                    testing_data: testing_data,
                    title: 'All Testings',
                  })
                }>
                <View style={styles.footer}>
                  <BlurView style={styles.absolute} viewRef={this.state.viewRef} blurType="light" blurAmount={30} />
                  <Text style={styles.h6}>Testing</Text>
                  <Text style={styles.subtitle}>View all your testing that have been created here!</Text>
                </View>
              </TouchableOpacity>
            ) : totalTesting === 0 ? (
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
            ) : null}
          </ScrollView>
        )} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({


  halfBackGround: {
    width: viewportWidth,
    height: viewportHeight / 5,
    position: 'absolute',
    backgroundColor: COLORS.BLUE,
  },

  safeArea: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.BLUE,
    alignItems: 'center',
    paddingTop: APPEARANCES.PADDING_TOP,
    paddingBottom: APPEARANCES.PADDING_BOTTOM,
  },
  hBtnRightContainer: {
    flex: 1,
    marginRight: APPEARANCES.MARGIN_RIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  IconContainer: {
    shadowColor: COLORS.DARK_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 15,
    shadowOpacity: 0.3,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    width: 45,
    height: 45,
    margin: APPEARANCES.UNIT_MARING,
  },
  HBtnIcon: {
    fontSize: 20,
    fontWeight: '700',
  },
  tittleContainer: {
    marginLeft: APPEARANCES.MARGIN_LEFT,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  carouselContainer: {
    backgroundColor: 'transparent'
  },
  groupHeader: {
    marginVertical: 20,
  },
  h5: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.TEXT,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  h6: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.HCOLOR,
    backgroundColor: 'transparent',
  },
  h4: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.TEXT,
    padding: 20,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 0,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
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
    color: 'rgba(0,0,0,0.5)',
    backgroundColor: 'transparent',
    fontSize: 15,
    marginTop: 10,
    fontWeight: '700',
  },
});

export default ProgramsComponent;
