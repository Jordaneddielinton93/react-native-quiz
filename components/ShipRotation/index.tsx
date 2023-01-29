import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import ImageAssets from "../../assets/images";

export default function ShipRotation() {
  const [rotationValue, setRotationValue] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(rotationValue, {
      toValue: 360,
      duration: 15000,
      useNativeDriver: true,
    }).start(() => {
      setRotationValue(new Animated.Value(0));
    });
  }, [rotationValue]);
  return (
    <View
      style={{
        position: "absolute",
        width: 790,
        height: 150,
        zIndex: 10,
        left: -235,
        top: 300,
      }}
    >
      <Animated.Image
        source={ImageAssets.curriculum.spaceShip}
        style={{
          transform: [
            {
              rotate: rotationValue.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      />
    </View>
  );
}
