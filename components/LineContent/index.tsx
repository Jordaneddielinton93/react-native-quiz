import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import * as UI from "../";
import { JS_keyWordsColorMap } from "../../constants/JsKeyWords";
import * as Ut from "../../utils/";
import { LineNumberJSX, setComponent } from "../../redux/slice";
import { useDispatch } from "react-redux";

export default function LineContent({
  lineNumberIndex,
  lineTextContent,
  editable,
  isSelectedInput,
}: any) {
  const dispatch = useDispatch();

  let [textInput, setTextInput] = useState(lineTextContent);

  const handleChange = (inputValue: string) => {
    setTextInput(inputValue);
    // pars the text and return the tag name & its attributes
    let parsedHtmlExists = Ut.text.parsTextGetHTML(inputValue);
    // if there is a correct html part then update the screen
    dispatch(setComponent({ lineNumberIndex, ...parsedHtmlExists }));
  };

  return (
    <View style={styles.container}>
      {/* below is the input the user is writing in */}
      <TextInput
        selectionColor={"#F1662A"}
        onChangeText={handleChange}
        multiline={true}
        style={UI.Input_Character_Styles.input}
        editable={editable}
        value={textInput.toLowerCase()}
      />
      {/* below is the viewed code you see */}
      <View
        style={{
          ...UI.Input_Character_Styles.view,
          backgroundColor: isSelectedInput ? "white" : "",
        }}
      >
        {Ut.text.findAndSplitJsKeyWordsArr(textInput).map((word: string) => {
          return (
            <Text
              style={
                JS_keyWordsColorMap[word] || {
                  color: "white",
                  fontWeight: "700",
                }
              }
            >
              {word.toLowerCase()}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    paddingLeft: 10,
    fontWeight: "500",
  },
});
