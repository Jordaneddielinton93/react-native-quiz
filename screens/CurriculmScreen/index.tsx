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
          curriculumTopicLanguageName="html"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.css}
          progress={10}
          curriculumTopicLanguageName="css"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.git}
          progress={0}
          curriculumTopicLanguageName="git"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.js}
          progress={0}
          curriculumTopicLanguageName="js"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.node}
          progress={0}
          curriculumTopicLanguageName="node"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.postgresql}
          progress={0}
          curriculumTopicLanguageName="postgresql"
        />
        <UI.LanguageSection
          navigation={navigation}
          img={ImageAssets.curriculum.react}
          progress={0}
          curriculumTopicLanguageName="react"
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
