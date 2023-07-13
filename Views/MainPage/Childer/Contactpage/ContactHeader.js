import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { firebase } from "../../../../config/firebase";

import {
  getStorage,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { async } from "@firebase/util";

// create a component
const ContactHeader = () => {
  ///
  const [selectedImage, setSelectedImage] = useState({
    localURI:
      "https://firebasestorage.googleapis.com/v0/b/rrdemo-98424.appspot.com/o/z3777176298214_0f68ce3fa3ad50c82e029ab4a81c0fe4.jpg?alt=media&token=3f76a4c2-3eaa-4250-b6d4-a95f2258bdd5",
  });
  const openImage = async ({ params }) => {
    let result = await ImagePicker.launchImageLibraryAsync({ base64: true });
    if (result.cancelled) return;
    let uri = result.uri;
    setSelectedImage({ localURI: uri });
    console.log(uri);

    if (Platform.OS === "web") {
      let base64code = result.base64;
      await uploadBase64Code(base64code);
      console.log("done");
    } else {
      let uri = result.uri;
      //convert to blob file

      const blobfile = await convertToBlob(uri);
      console.log(blobfile);
      //upload file
      await uploadFileBlob(blobfile);
    }
  };

  const convertToBlob = async (uri) => {
    const convert = await new Promise((resolve, reject) => {
      let xmlRequest = new XMLHttpRequest();
      xmlRequest.onload = function () {
        resolve(xmlRequest.response);
      };
      xmlRequest.onerror = function () {
        console.log("err here");
      };
      xmlRequest.contentType = "blob";
      xmlRequest.open("GET", uri, true);
      xmlRequest.send(null);
    });
  };
  ////
  ///// upload ios
  const uploadFileBlob = async (blobfile) => {
    let imgname = "img-ios-" + new Date().getTime();
    console.log(imgname);
    let fullname = `images\\${imgname}.jpg`;
    console.log(fullname);
    let storage = getStorage();
    let storageref = ref(storage, `images/${imgname}.jpg`);
    console.log("storageref", storageref);

    let metadata = {
      contentType: "image/jpeg",
    };
    const uploadTask = uploadBytesResumable(storageref, blobfile, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(snapshot.storage.ref).then(async (downloadURL) => {
          console.log("downloadURL", downloadURL);
        });
      }
    );
  };
  //// end upload ios
  ///upload web

  const uploadBase64Code = async (base64code) => {
    let imgName = "img-w-" + new Date().getTime();

    let storage = getStorage();
    let storageref = ref(storage, `images/${imgName}.jpg`);
    console.log("Upload", imgName);
    let metadata = {
      contentType: "image/jpeg",
    };

    uploadString(storageref, base64code, "base64", metadata).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          console.log("downloadURL", downloadURL);
        });
      }
    );
  };
  ///

  ///
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          style={styles.imgavatar}
          source={{
            uri: selectedImage.localURI,
          }}
        />
      </View>
      <View style={styles.textavatar}>
        <TouchableOpacity onPress={openImage}>
          <Text style={styles.btn}>Choose your image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 60,
    margin: 10,
  },

  imgavatar: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textavatar: {
    color: "#fff",
  },
  btn: {
    color: "red",
    fontWeight: "bold",
    fontSize: "20",
  },
});

//make this component available to the app
export default ContactHeader;
