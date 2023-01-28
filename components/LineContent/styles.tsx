import { StyleSheet } from "react-native";

let simmilarStyles = {
  height: 15,
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: 3,
};

const styles = StyleSheet.create({
  input: {
    ...simmilarStyles,
    width: 300,
    color: "rgba(0,0,0,0)",
    position: "absolute",
    zIndex: 1,
    paddingLeft: 4,
    fontWeight: "700",
  },
  view: {
    ...simmilarStyles,
    flexDirection: "row",
    color: "white",
    position: "absolute",
  },
});

export default styles;
