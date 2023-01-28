import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export default function TextValue({ value }: any) {
  return <Text style={styles.container}>{" " + value + " "}</Text>;
}

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
});
