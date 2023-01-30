import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import * as UI from "..";

type Props = {};

export default function CircleBackButton() {
  const navigation: any = useNavigation();

  return (
    <TouchableHighlight onPress={() => navigation.pop()} style={styles.button}>
      <UI.AntDesign name="arrowleft" size={30} color="white" />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#292761",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#48AA6A",
    borderWidth: 2,
    color: "white",
  },
});
