//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import products from "../../../../data/Products";

// create a component
function MallBody() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyItem}>
          <View style={styles.ItemImage}>
            <Image
              style={styles.logo}
              source={require("../../../../assets/logo.png")}
              alt={products.name}
            />
          </View>
          <View style={styles.Itemtext}>
            <Text style={{ fontWeight: "bold" }}>$100</Text>

            <Text style={{ marginLeft: 30, fontWeight: "bold" }}>
              tên Sản Phẩm
            </Text>
          </View>
          <View style={styles.Itemcontact}>
            <Text>Mo ta</Text>
            <FontAwesome
              style={{ marginLeft: 20 }}
              name="star"
              color="#e32f45"
              size={15}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#009387",
  },
  body: {
    padding: 15,
  },
  bodyItem: {
    width: "47%",
    backgroundColor: "#fff",
    padding: 10,
    overflow: "hidden",
    height: "50%",
    borderRadius: 20,
  },
  ItemImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  Itemtext: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
  },
  logo: {
    width: "70%",
    height: "70%",
  },
});

//make this component available to the app
export default MallBody;
