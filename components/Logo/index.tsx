import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {};

export default function Logo({}: Props) {
  return (
    <View style={styles.BugsLeftInCode}>
      <Text style={styles.Text}>School of Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BugsLeftInCode: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    height: 38,
    width: 186,
    backgroundColor: "#242654",
    borderWidth: 1,
    borderColor: "#48B96D",
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    borderBottomLeftRadius: 305,
    borderBottomRightRadius: 305,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Text: {
    fontSize: 18,
    color: "#48B96D",
  },
});
