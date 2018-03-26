//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, APPEARANCES } from '../modules';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// create a component
class GridMenu extends Component {

    render() {
        const styles = StyleSheet.create({
            gridView: {
                marginHorizontal: this.props.gridMarginHorizontal,
               marginTop: 5,
               marginBottom: 10, 
                borderWidth: 0.1,
                borderColor: COLORS.BORDER,
                borderRadius: 8,
                backgroundColor: COLORS.WHITE,
                shadowColor: '#CFCCDC',
                shadowOffset: {
                    width: 2,
                    height: 10,
                },
                shadowRadius: 15,
                shadowOpacity: 1,
                elevation: 15,
            },
        
            gridViewItemContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: APPEARANCES.UNIT_MARING,
                borderBottomWidth: 0.5,
                borderColor: COLORS.BORDER,
                borderRadius: 32,
            },
            gridViewItemContainer2: {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: APPEARANCES.UNIT_MARING,
            },
        
            gridViewItem: {
                marginHorizontal: this.props.itemMargin,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: this.props.itemPaddingVertical,
                paddingVertical: this.props.itemPaddingHorizontal,
        
            },
            gridViewItemMiddle:{
                marginHorizontal: this.props.itemMargin,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: this.props.itemPaddingVertical,
                borderLeftWidth: 0.5,
                borderRightWidth: 0.5,
                borderColor:COLORS.BORDER,
                borderRadius: 5,
            },
        
            gridIcon: {
                textAlign: 'center',
                fontSize: this.props.iconSize,
                color: COLORS.BLUE,
            },
            gridText: {
                textAlign: 'center',
                fontSize: this.props.fontSize,
                fontWeight: '300',
            },
        });




        return (
            <View style={styles.gridView}>
                <View style={styles.gridViewItemContainer2}>
                    <TouchableOpacity
                    onPress = {() => this.props.onBTN1('1')}
                     style={styles.gridViewItem}>
                        <MaterialIcons style={styles.gridIcon} name= {this.props.BTN1} />
                        <Text style={styles.gridText}>Testing Center</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress = {() => this.props.onBTN2('2')}
                    style={styles.gridViewItem}>
                        <Ionicons style={styles.gridIcon}  name= {this.props.BTN2} />
                        <Text style={styles.gridText}>English Program</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress = {() => this.props.onBTN3('3')}
                     style={styles.gridViewItem}>
                        <Ionicons style={styles.gridIcon}  name= {this.props.BTN3} />
                        <Text style={styles.gridText}>Academic Program </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gridViewItemContainer2}>
                    <TouchableOpacity 
                    onPress = {() => this.props.onBTN4('4')}
                    style={styles.gridViewItem}>
                        <Ionicons style={styles.gridIcon} name= {this.props.BTN4} />
                        <Text style={styles.gridText}>Institutes & Centers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress = {() => this.props.onBTN5('5')}
                    style={styles.gridViewItem}>
                        <Ionicons style={styles.gridIcon}  name= {this.props.BTN5} />
                        <Text style={styles.gridText}> Short Course </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress = {() => this.props.onBTN6('6')}
                     style={styles.gridViewItem}>
                        <Ionicons style={styles.gridIcon}  name= {this.props.BTN6} />
                        <Text style={styles.gridText}> Event </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default GridMenu;
