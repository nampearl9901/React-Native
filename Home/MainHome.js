//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "../Views/Login/Login";
import Register from "../Views/Login/Register";
import Main from "../Views/MainPage/Mainpage";

const Stack = createNativeStackNavigator();

// create a component
const MainHome = () => {
  return (
  
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main Home" }}
        />
      </Stack.Navigator>
   
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default MainHome;
