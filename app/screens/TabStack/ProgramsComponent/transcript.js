import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { COLORS, ICONS, APPEARANCES } from '../../../modules';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
class TransciptScreen extends Component {

    transcript(data) {
        return (
            <View style={styles.transcriptContainer}>
                <View style={styles.transcript}>
                    <View style={styles.details}>
                        <View style={styles.grade}>
                            <Text style={[styles.gradeTittle, data.completed && styles.ifCompletedText]}>{data.grade}</Text>
                            <Text style={styles.gradeText}>Grade</Text>
                        </View>
                        <View style={styles.subject}>
                            <Text style = { styles.finishDate}>completed since: {data.finishDate}</Text>
                            <Text style={styles.subjectTittle}>{data.subject}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={data.completed && 1}
                        style={[styles.requestButton, data.completed && styles.ifCompleted]}>
                        <Text style={styles.requestText} > {data.completed ? 'Completed' : 'Request for Enrollment'} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const transcript = [
            {
                grade: 'A',
                subject: 'Object Oriented Programing',
                completed: true,
                finishDate: '30.03.2017'
            },
            {
                grade: 'NA',
                subject: 'Network Admin',
                completed: false,
                finishDate: 'NA'

            },
            {
                grade: 'NA',
                subject: 'Network Admin',
                completed: false,
                finishDate: 'NA'

            },
            {
                grade: 'B',
                subject: 'Accounting Information System',
                completed: true,
                finishDate: '30.03.2017'

            },
            {
                grade: 'C',
                subject: 'Accounting Information System',
                completed: true,
                finishDate: '30.03.2017'

            }
        ]
        return (
            <View style={styles.safeArea}>
                <View style={styles.header}>
                    <Text style={styles.headerTittle}>Transcript</Text>
                </View>
                <FlatList
                    style={{ marginTop: 5, paddingHorizontal: 5 }}
                    data={transcript}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.transcript(item)}
                />
            </View>
        );
    }
}
SKY = '#46AFFC';
const styles = StyleSheet.create({
    finishDate:{
       marginBottom: 15,
    },
    gradeTittle: {
        fontSize: 25,
        fontWeight: '700',
        color: '#F15354'
    },
    gradeText: {
        fontSize: 12,
        fontWeight: '300'
    },
    details: {
        flexDirection: 'row',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        backgroundColor: COLORS.BLUE,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTittle: {
        padding: APPEARANCES.PADDING,
        fontSize: 22,
        fontWeight: '300',
        color: COLORS.WHITE,
    },
    transcriptContainer: {
    },
    transcript: {
        margin: 10,
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
    grade: {
        borderRightWidth: 1,
        borderColor: COLORS.BORDER,
        padding: APPEARANCES.PADDING,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subject: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    requestButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F15354',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    ifCompleted: {
        backgroundColor: SKY,
    },
    ifCompletedText: {
        color: SKY,
    },
    requestText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#fff',
    },
    subjectTittle: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    }

});

//make this component available to the app
export default TransciptScreen;
