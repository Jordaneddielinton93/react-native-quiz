import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {};

export default function CurriculmScreen({}: Props) {
  return <ScrollView style={styles.container}></ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#141D3A",
  },
  text: {},
});
