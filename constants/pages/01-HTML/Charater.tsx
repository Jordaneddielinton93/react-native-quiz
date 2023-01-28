import React from "react";
import * as UI from "../../../components/";
import { T_JSX_Data } from "../../../types/types";

let titleAndText = {
  title: "How To HTML",
  text: [
    {
      content:
        "We are going to use HTML to build our character. Click on the HTML tab of your coding window",
    },
    {
      content:
        "The HTML tab contains our HTML code - this might look a little strange, so let's break it down. On each line you can see different HTML 'tags' - a tag is just a thing in HTML which the computer recognises, and it follows the pattern < followed by a word followed by a >.",
    },
  ],
};

let JSX_Character_Data: T_JSX_Data = [
  {
    editable: false,
    initValue: "<character>",
    textColor: "red",
    isSelectedInput: false,
  },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  { editable: true, initValue: "", textColor: "red", isSelectedInput: false },
  {
    editable: false,
    initValue: "</character>",
    textColor: "red",
    isSelectedInput: false,
  },
];

export default { JSX_Character_Data, titleAndText };
