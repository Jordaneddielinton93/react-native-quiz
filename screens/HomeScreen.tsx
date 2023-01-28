import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useEffect, useState } from "react";
import * as UI from "../components";
import * as JSX_Data from "../constants";

export default function HomeScreen({}) {
  // JSX_Data.HTMLs_JSX_Character_Data
  // .titleAndText
  // .JSX_Character_Data
  return (
    <View style={styles.container}>
      <UI.CodeEditor jsxData={JSX_Data.HTMLs_JSX_Character_Data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
