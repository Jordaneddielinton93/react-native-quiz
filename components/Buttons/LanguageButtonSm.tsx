import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { RootStackParamList } from "../../App";
import ImageAssets from "../../assets/images";
import { T_LanguageTypes } from "../../types/types";

type Topic_LayoutComponentRouteProp = RouteProp<RootStackParamList, "Topic">;

interface Props {
  route?: Topic_LayoutComponentRouteProp;
  progress: number;
}

export default function LanguageButtonSm({ progress }: Props) {
  const route = useRoute();
  let curriculumTopicLanguageName = route?.params?.curriculumTopicLanguageName;

  let img =
    ImageAssets.curriculum[
      curriculumTopicLanguageName as keyof T_LanguageTypes
    ];
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        style={styles.svg}
        size={70}
        width={10}
        fill={progress}
        tintColor="#44B446"
        onAnimationComplete={() => console.log("onAnimationComplete")}
      />
      <View style={styles.innerCircle}>
        <View
          style={{
            ...styles.lastCircle,
            borderColor: progress ? "#44B446" : "#808080",
          }}
        >
          <Image source={img} style={{ height: 37, width: 33 }} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
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
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: -2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  lastCircle: {
    width: 54,
    height: 54,
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
    overflow: "visible",
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
