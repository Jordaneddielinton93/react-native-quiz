import { useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import * as UI from "../../../../components";
import * as JSX_Data from "../../../../constants";

export default function DynamicQuestions() {
  const route = useRoute();

  return (
    <SafeAreaView style={{ backgroundColor: "#141D3A" }}>
      <UI.TopSplash />
      <ScrollView style={styles.container}>
        <UI.CodeEditor jsxData={JSX_Data.HTMLs_JSX_Character_Data} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "#141D3A",
  },
  image: {
    width: "100%",
    height: 303,
    position: "absolute",
    resizeMode: "cover",
  },
});
