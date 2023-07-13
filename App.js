import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Views/MainPage/Mainpage";

import MainHome from "./Home/MainHome";
import { Provider } from "react-redux";
import store from "./Redux/stores/store";
import CartPage from "./Views/MainPage/Childer/Cartpage/CartPage";
import MallPage from "./Views/MainPage/Childer/MallPage/MallPage";

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <MainHome />
      </NavigationContainer> */}
     <MallPage/>
    </Provider>
  );
}

const styles = StyleSheet.create({});
