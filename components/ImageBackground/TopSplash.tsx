import React from "react";
import { ImageBackground } from "react-native";
import ImageAssets from "../../assets/images";

type Props = {
  Img: number;
};

export default function TopSplash() {
  return (
    <ImageBackground
      source={ImageAssets.Topic.TopSplash}
      style={{ width: "100%", height: 303, position: "absolute" }}
      resizeMode="cover"
    ></ImageBackground>
  );
}
