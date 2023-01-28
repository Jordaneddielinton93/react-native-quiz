import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function LineNumber({ number }: any) {
  return <Text style={styles.container}> {number}</Text>;
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    minWidth: 45,
    paddingRight: 12,
    paddingTop: 2,
    backgroundColor: "#232323",
    shadowColor: "#171717",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    color: "white",
    textAlign: "right",
  },
});
