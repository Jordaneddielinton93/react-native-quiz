import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

export type T_JSX_Data = {
  editable: boolean;
  initValue: string;
  textColor: string;
  isSelectedInput: boolean;
}[];

export type TImageAssets = {
  curriculum: {
    html: number;
    css: number;
    git: number;
    js: number;
    node: number;
    postgresql: number;
    react: number;
    mountain: number;
    spaceShip: number;
  };
  Topic: {
    TopSplash: number;
  };
};

export type T_LanguageTypes = {
  html: string;
  css: string;
  git: string;
  js: string;
  node: string;
  postgresql: string;
  react: string;
};
export type T_topicSelections = {
  html: string[];
  css: string[];
  git: string[];
  js: string[];
  node: string[];
  postgresql: string[];
  react: string[];
};

export type T_ScreenProps = NativeStackScreenProps<RootStackParamList>;
