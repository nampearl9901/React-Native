import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";


import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header} animation="slideInLeft">
          Welcome!
        </Text>
      </View>

      <View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput style={styles.textinput} placeholder="Your Email" />
          <Feather name="check-circle" color="grey" size={20} />
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            style={styles.textinput}
            placeholder="Your Password"
            secureTextEntry={true}
          />

          <Feather name="eye-off" color="grey" size={20} />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.textSign}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.text}
            onPress={() => navigation.navigate("Register")}
          >
            <Text>Register account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  text: {
    flex: 1,
    marginTop: 35,
    padding: 10,

    color: "#05375a",
  },
  btn: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#009387",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
