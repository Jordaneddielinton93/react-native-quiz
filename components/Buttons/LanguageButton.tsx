import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Svg, Circle } from "react-native-svg";
type Props = {};

export default function LanguageButton({}: Props) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        style={styles.svg}
        size={140}
        width={10}
        fill={10}
        tintColor="#44B446"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="white"
      />
      <View style={styles.innerCircle}>
        <View style={styles.lastCircle}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  svg: {
    position: "absolute",
    transform: [{ rotate: "-90deg" }],
  },
  innerCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: -2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  lastCircle: {
    width: 107,
    height: 107,
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: "#44B446",
  },
});
