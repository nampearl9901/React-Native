//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CartPage from "../Cartpage/CartPage";

// create a component
const MallHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          placeholder="Nike, Puma, Adidas, Human Heart,....."
        />
        <TouchableOpacity>
          <FontAwesome
            style={styles.icons}
            name="search"
            color="#e32f45"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={{ marginTop: 30, left: 10 }}
            name="shopping-bag"
            color="#e32f45"
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
  icons: {
    marginTop: 30,
  padding:20,
  },
  textInput: {
    marginTop: 30,
    borderColor: "#e32f45",
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    width: "65%",
    padding: 10,
    right: 10,
  },
});

//make this component available to the app
export default MallHeader;
