import { Button, Image, Pressable, StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type Props = {};

export default function LanguageButtonLg({
  img,
  progress,
  navigation,
  languageIcon,
}: any) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        style={styles.svg}
        size={140}
        width={10}
        fill={progress}
        tintColor="#44B446"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="white"
      />
      <View style={styles.innerCircle}>
        <View
          style={{
            ...styles.lastCircle,
            borderColor: progress ? "#44B446" : "#808080",
          }}
        >
          <Image source={img} />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Topic", { languageIcon: languageIcon })
        }
        accessibilityLabel="Learn more about html"
      ></Pressable>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
});
