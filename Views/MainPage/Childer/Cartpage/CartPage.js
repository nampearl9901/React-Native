//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
const CartPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.text}>Cart</Text>
      </View>

      <View style={styles.listitem}>
        <View style={styles.itemlist}>
          <Image
            style={styles.itemimg}
            source={require("../../../../assets/logo.png")}
          />
          <View style={styles.listtext}>
            <Text>tên Sản Phẩm</Text>
            <Text>giá tiền</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#009387",
  },
  textHeader: {
    marginTop: 80,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  listitem: {
    left:30,
    overflow: "hidden",
    backgroundColor: "#fff",
    height: "15%",
    width: "85%",
    borderRadius: 20,
    flexDirection: "row",
 
  },
  itemlist: {
    flexDirection: "row",
  },
  itemimg: {
    width: "70%",
    height: "100%",
  },
  listtext: {
    padding: 20,
  },
});

//make this component available to the app
export default CartPage;
