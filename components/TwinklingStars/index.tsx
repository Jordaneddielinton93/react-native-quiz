import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { StyleSheet } from "react-native";

const TwinklingStars = ({ count = 10, size = 3, color = "white" }) => {
  const starsRef = useRef<any>([]);

  useEffect(() => {
    starsRef.current.forEach((star: any, index: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(star, {
            toValue: 1,
            duration: 1000,
            delay: index * 200,
            useNativeDriver: true,
          }),
          Animated.timing(star, {
            toValue: 0,
            duration: 1000,
            delay: index * 200,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, []);

  const stars = [];
  for (let i = 0; i < count; i++) {
    const starRef = useRef(new Animated.Value(Math.random())).current;
    starsRef.current.push(starRef);
    stars.push(
      <Animated.View
        key={i}
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
            position: "absolute",
            top: Math.random() * 150,
            left: Math.random() * 350,
            opacity: starRef,
          },
        ]}
      />
    );
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default TwinklingStars;
