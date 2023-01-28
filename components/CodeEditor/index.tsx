import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import * as UI from "../";
import { T_JSX_Data } from "../../types/types";

type props = {
  jsxData: {
    JSX_Character_Data: T_JSX_Data;
  };
};

export default function CodeEditor(props: props) {
  return (
    <View style={styles.container}>
      <UI.EditoerView />
      <UI.EditorJSX jsxData={props.jsxData.JSX_Character_Data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: 370,
    paddingTop: 0,
    paddingBottom: 0,
    padding: 10,
    height: 500,
    backgroundColor: "gray",
  },
  text: {},
});
