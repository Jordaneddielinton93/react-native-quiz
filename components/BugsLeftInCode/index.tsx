import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {};

export default function BugsLeftInCode({}: Props) {
  let dynamicNumber = 5;
  return (
    <View style={styles.BugsLeftInCode}>
      <MaterialIcons
        style={styles.Bug}
        name="bug-report"
        size={24}
        color="black"
      />
      <Text style={styles.Number}>{dynamicNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BugsLeftInCode: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    height: 27,
    width: 61,
    backgroundColor: "#242654",
    borderWidth: 1,
    borderColor: "#48B96D",
    borderRadius: 61,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Bug: {
    color: "red",
  },
  Number: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    fontStyle: "italic",
  },
});
