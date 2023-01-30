import {
  Button,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import * as UI from "../";
import topicSelections from "../../constants/TopicSelections";
import { T_LanguageTypes } from "../../types/types";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ToipicSelection() {
  const navigation: any = useNavigation();
  const route = useRoute();
  let curriculumTopicLanguageName = route?.params?.curriculumTopicLanguageName;

  return (
    <View style={styles.container}>
      <View style={styles.title_and_arrow}>
        <View>
          <Text style={styles.course}>COURSE</Text>
          <Text style={{ ...styles.topic, textTransform: "uppercase" }}>
            {curriculumTopicLanguageName}
          </Text>
        </View>
        <UI.AntDesign style={styles.arrow} name="arrowright" />
      </View>
      {topicSelections[
        curriculumTopicLanguageName as keyof T_LanguageTypes
      ].map((topicLevel) => {
        console.log(curriculumTopicLanguageName, topicLevel);
        return (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("DynamicQuestions", {
                fetchDataFor: { curriculumTopicLanguageName, topicLevel },
              });
            }}
          >
            <View key={topicLevel} style={styles.topicLevel}>
              <Text style={styles.topicLevel_text}>{topicLevel}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    minHeight: 190,

    marginTop: 30,
    borderRadius: 18,
  },
  title_and_arrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#233567",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  course: {
    fontSize: 18,
    color: "white",
  },
  topic: {
    fontWeight: "700",
    fontSize: 30,
    color: "#3EBD64",
    textShadowColor: "rgba(60, 85, 155, 0.95)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  arrow: {
    fontSize: 39,
    color: "white",
  },
  topicLevel: {
    height: 84,
    width: "100%",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    shadowColor: "#DDDDDD",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  topicLevel_text: {
    fontSize: 30,
    fontWeight: "600",
  },
});
