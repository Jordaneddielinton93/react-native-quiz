import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import CurriculmHeader from "../../components/TopHeader/CurriculmHeader";
import * as UI from "../../components";

type Props = {};

export default function CurriculmScreen({}: Props) {
  return (
    <SafeAreaView style={{ backgroundColor: "#141D3A" }}>
      <UI.CurriculmHeader />
      <ScrollView style={styles.container}>
        <UI.TwinklingStars />
        <UI.Mountain_Avatar />
        <UI.LanguageSection />
        <UI.LanguageSection />
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
  text: {},
});
