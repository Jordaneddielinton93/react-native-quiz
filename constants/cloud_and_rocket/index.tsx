import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Animated } from "react-native";

import { clouds } from "./clouds";
type Props = {};

export default function Cloud_and_rocket({}: Props) {
  return (
    <View style={styles.container}>
      <View>{clouds}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 376,
    width: "100%",
  },
});
