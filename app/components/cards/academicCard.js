//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, APPEARANCES} from '../../modules';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class AcademicCard extends Component {
    render() {
        return (
            <View style={styles._Card}>
            <View style={styles.headerItems}>
              <View style = {styles.headerIconContainer}>
              <Ionicons name='md-school' style={styles.headerIcon} />
              </View>
              <View style={styles.cardHeader}>
                <View style={styles.cardTypeContainer}>
                  <Text
                    style={styles.cardType}>{this.props.type}</Text>
                </View>
                <Text style={styles.facultyTittle}> {this.props.faculty} </Text>
              </View>
            </View>
            <View style={styles.majorcontainer}>
              <Text
                style={styles.majorTittle}>{this.props.major}</Text>
            </View>
            <View style={styles.subjectContainer}>
              <Text
                style={styles.subjectTittle}>{this.props.subject}</Text>
            </View>
            <View style={styles.subjectDescriptionContainer}>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={3}
                ellipsizeMode={'head'}
                style={styles.subjectDescription}> {this.props.description} </Text>
            </View>
            <View style={styles.buttonDetailContainer}>
              <TouchableOpacity style={styles.moreDetailButton}>
                <Text style={styles.moreDetailText}>DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}

MARGIN_HORIZONTAL = 15;
SKY = '#46AFFC';
const styles = StyleSheet.create({
    buttonDetailContainer: {
        alignItems: 'flex-end',
      },
    moreDetailButton: {
        borderWidth : 0.8,
        borderColor: COLORS.BORDER,
        borderRadius: 3,
        marginRight: 15,
        marginTop: 35,
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      },
      moreDetailText: {
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '700',
      },
      headerItems: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      cardHeader: {
        alignItems: 'flex-end',
        marginTop: 10,
      },
      headerIconContainer:{
        width: 80,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerIcon: {
        color : COLORS.WHITE,
        fontSize: 52,
      },
      cardType: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.WHITE,
      },
      cardTypeContainer: {
        backgroundColor: 'rgba(255,255,255,0.0)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      },
    
      facultyTittle: {
        marginTop: 5,
        fontSize: 14,
        color: COLORS.WHITE,
        fontWeight: '700',
      },
      majorcontainer: {
        marginTop: 35,
        marginLeft: 15,
      },
      majorTittle: {
        fontSize: 16,
        color: COLORS.WHITE,
        fontWeight: '700',
      },
      subjectContainer: {
        marginLeft: 15,
        marginBottom: 15,
      },
      subjectTittle: {
        fontSize: 22,
        color: COLORS.WHITE,
        fontWeight: '700',
      },
    
      subjectDescriptionContainer: {
        marginLeft: 15,
        marginRight: 15,
      },
    
      subjectDescription: {
        color: COLORS.WHITE,
        fontSize: 12,
      },
    
      _Card: {
        padding: APPEARANCES.PADDING,
        marginVertical: APPEARANCES.MARGIN_VERTICAL,
        marginHorizontal: MARGIN_HORIZONTAL,
        borderRadius: 8,
        backgroundColor: SKY,
        shadowColor: '#CFCCDC',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowRadius: 15,
        shadowOpacity: 0.9,
        elevation: 15,
        position: 'relative',
        flexDirection: 'column',
      },
});

//make this component available to the app
export default AcademicCard;
