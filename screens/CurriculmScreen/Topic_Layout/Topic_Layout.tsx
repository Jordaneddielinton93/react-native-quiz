import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import * as UI from "../../../components";

export default function Topic_Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <UI.TopSplash />
      <ScrollView>
        <UI.ToipicHeader progress={100} />
        <UI.ToipicSelection />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 303,
    position: "absolute",
    resizeMode: "cover",
  },
});
