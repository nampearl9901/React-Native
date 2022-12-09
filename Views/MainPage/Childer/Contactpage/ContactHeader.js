//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ContactHeader = () => {
    return (
        <View style={styles.container}>
            <Text>ContactHeader</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default ContactHeader;
