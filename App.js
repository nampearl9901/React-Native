import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Views/MainPage/Mainpage";

import MainHome from "./Home/MainHome";

export default function App() {
  return (
    <NavigationContainer>  
      <MainHome />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
