import { Button, StyleSheet, TouchableHighlight, View } from "react-native";
import * as UI from "../../";

export default function ToipicHeader({
  progress,
  img,
  navigation,
}: {
  progress: number;
  img: any;
  navigation: any;
}) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight
          onPress={() => navigation.pop()}
          style={styles.button}
        >
          <UI.AntDesign name="arrowleft" size={30} color="white" />
        </TouchableHighlight>
      </View>
      <View style={styles.LogoCoins_and_Button}>
        <View style={styles.Logo_and_bugcoin}>
          <UI.Logo />
          <View style={styles.bugcoin}>
            <UI.BugsLeftInCode />
            <UI.CoinsEarned />
          </View>
        </View>
        <UI.LanguageButtonSm progress={progress} img={img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 75,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "#292761",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#48AA6A",
    borderWidth: 2,
    color: "white",
  },

  Logo_and_bugcoin: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    maxWidth: 186,
  },
  bugcoin: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 133,
  },
  LogoCoins_and_Button: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 265,
  },
});
