import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MallPage from "./Childer/MallPage/MallPage";
import ContactPage from "./Childer/Contactpage/ContactPage";
import CartPage from "./Childer/Cartpage/CartPage";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <TouchableOpacity
  
    style={{
      top: -30,
      justifyContent: "center",
      alignContent: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#e32f45",
        
      }}
    >
      
      {children}
    </View>
  </TouchableOpacity>
);

const Main = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { ...styles.tab },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen  name="Mall Page" component={MallPage}  options={{
        tabBarIcon:({size})=>(<FontAwesome style={{justifyContent:'center', alignItems:'center', top:10}}  name="home" color="#05375a" size={30} />)
      }}></Tab.Screen>
      <Tab.Screen
       
        name="Cart" component={CartPage} 
        options={{ tabBarButton: (props) => <CustomTab {...props} />,tabBarIcon:({size})=>(<FontAwesome name="shopping-cart" color="#fff" size={30} />)
       }}
      ></Tab.Screen>
      <Tab.Screen name="Contact Page"
        component={ContactPage}  options={{
        tabBarIcon:({size})=>(<FontAwesome style={{justifyContent:'center', alignItems:'center', top:10}} name="user" color="#05375a" size={30} />)
      }}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default Main;
const styles = StyleSheet.create({
 
  text: {
    justifyContent: "center",
    alignContent: "center",

    fontWeight: "bold",
    fontSize: 20,
  },
  tab: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 90,
    
  },
  main: {
    backgroundColor: "#009387",
  },
});
