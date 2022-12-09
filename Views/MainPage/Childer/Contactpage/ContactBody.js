//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ContactBody = () => {
  return (
    <View style={styles.container}>
      <Text>ContactBody</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#009387",
  },
});

//make this component available to the app
export default ContactBody;
