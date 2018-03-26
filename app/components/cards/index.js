//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AcademicCard from './academicCard'
// create a component
class CardComponent extends Component {
    render() {
        return (
            <FlatList
                data={this.props.data}
                keyExtractor={(item) => item.id}
                renderItem={({item})=><AcademicCard {...item} />}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CardComponent;
