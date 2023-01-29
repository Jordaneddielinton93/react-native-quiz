import React from "react";
import { StyleSheet, View } from "react-native";
import * as UI from "../../";

type Props = {};

export default function CurriculmHeader({}: Props) {
  return (
    <View style={styles.Container}>
      <View style={styles.CurriculmHeader}>
        <UI.BugsLeftInCode />
        <UI.Logo />
        <UI.CoinsEarned />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  CurriculmHeader: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 353,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
