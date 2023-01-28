import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import * as UI from "../";
import { LineNumberJSX, setComponent } from "../../redux/slice";
import { T_JSX_Data } from "../../types/types";

export default function EditorJSX({ jsxData }: { jsxData: T_JSX_Data }) {
  // console.log(state);
  return (
    <ScrollView style={styles.Scroll_Container}>
      <View style={styles.container}>
        <View style={styles.container_Column}>
          {jsxData.map((content, lineNumberIndex) => {
            return (
              <View style={styles.container_Column_line}>
                <UI.LineNumber number={lineNumberIndex + 1} />
                <UI.LineContent
                  {...content}
                  lineNumberIndex={lineNumberIndex}
                  lineTextContent={content.initValue}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Scroll_Container: {
    width: "100%",
    height: 255,
    maxHeight: 255,
    backgroundColor: "#141414",
    borderColor: "#02ECFC",
    borderWidth: 2,
    overflow: "scroll",
    fontSize: 12,
    borderRadius: 2,
  },
  container: {
    flexDirection: "row",
  },

  container_Column: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 2,
  },
  container_Column_line: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});
