// @ts-nocheck
import { StyleSheet, Text, View } from "react-native";
// import { RootTabScreenProps } from "../types";
import { useState } from "react";
import * as characterSvg from "../../constants/Character_svg";
// import * as JSX_Data from "../constants/pages";
import Svg from "react-native-svg";
import { useSelector } from "react-redux";
import { TActionPayload } from "../../redux/slice";
export default function EditoerView({}) {
  const characterObjectLineList = useSelector(
    (state: { character: TActionPayload[] }) => state.character
  );
  // gets the state arrayObj from redux slice
  return (
    <View style={styles.container}>
      <View style={styles.container_scale}>
        <Svg height="500px" width="100%">
          {characterObjectLineList.map((Obj) => {
            // maps over redux state, then uses the mapped obj to select the svg from a const list
            // also sees if there is any type appliced to it
            const getSvgBYComponentName = characterSvg[Obj.component];
            // if the there is an svg with the name given from the map save it
            if (getSvgBYComponentName) {
              return (
                // if there is a type found then apply it else get the first one
                getSvgBYComponentName[Obj.type] ?? getSvgBYComponentName[0]
              );
            } else {
              return "";
            }
          })}
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: "100%",
    backgroundColor: "#E3E3E3",
    borderColor: "#02ECFC",
    borderWidth: 2,
    position: "relative",
  },
  container_scale: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 0.6 }],
  },
  test: {
    position: "absolute",
    left: 100,
  },
});
