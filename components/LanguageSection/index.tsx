import React from "react";
import { StyleSheet, View } from "react-native";

import * as UI from "../../components";
import { Squares_svg } from "../../constants";

export default function LanguageSection({
  img,
  progress,
  navigation,
  languageIcon,
}: any) {
  return (
    <View style={styles.container}>
      <UI.LanguageButtonLg
        navigation={navigation}
        img={img}
        progress={progress}
        languageIcon={languageIcon}
      />
      <Squares_svg style={styles.square1} />
      <Squares_svg style={styles.square2} color="#4C5DEE" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    position: "relative",
  },
  image: {
    position: "absolute",
    right: 0,
    top: 0,
    height: 60,
    width: 60,
    zIndex: 10,
  },
  square1: {
    position: "absolute",
    right: 20,
    top: 80,
  },
  square2: {
    position: "absolute",
    left: 20,
    top: 200,
  },
});
