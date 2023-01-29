import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Cloud_and_rocket } from "../../constants";

type Props = {};

export default function Mountain_Avatar({}: Props) {
  return (
    <View style={styles.Container}>
      <Cloud_and_rocket />
      <ImageBackground
        source={require("../../assets/images/curriculmScreen/mountain.png")}
        style={styles.image}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: "relative",
    width: "100%",
    height: 405,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
});
