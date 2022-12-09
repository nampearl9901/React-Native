//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ContactBody from "./ContactBody";
import ContactHeader from "./ContactHeader";

// create a component
const ContactPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ContactHeader/>
      <ContactBody/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
});

//make this component available to the app
export default ContactPage;
