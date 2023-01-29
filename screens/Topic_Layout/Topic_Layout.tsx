import { useRoute } from "@react-navigation/native";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageAssets from "../../assets/images";
import * as UI from "../../components";

export default function Topic_Layout({ navigation, route }: any) {
  let { params } = route;

  let images = ImageAssets.curriculum[params.languageIcon];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={ImageAssets.Topic.TopSplash}
        style={styles.image}
        resizeMode="cover"
      ></ImageBackground>
      <ScrollView>
        <UI.ToipicHeader progress={100} navigation={navigation} img={images} />
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
