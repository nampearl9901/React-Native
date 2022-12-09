//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MallBody from "./MallBody";

import MallHeader from "./MallHeader";

// create a component
const MallPage = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <MallHeader />
      <MallBody/>
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#009387",
  }
});

//make this component available to the app
export default MallPage;
