import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageAssets from "../../assets/images";
import * as UI from "../../components";

export default function CurriculmScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ backgroundColor: "#141D3A" }}>
      <UI.CurriculmHeader />
      <ScrollView style={styles.container}>
        <UI.TwinklingStars />
        <UI.Mountain_Avatar />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.html}
          progress={75}
          languageIcon="html"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.css}
          progress={10}
          languageIcon="css"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.git}
          progress={0}
          languageIcon="git"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.js}
          progress={0}
          languageIcon="js"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.node}
          progress={0}
          languageIcon="node"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.postgresql}
          progress={0}
          languageIcon="postgresql"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "#141D3A",
  },
  text: {},
});
