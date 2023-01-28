import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MaybeDoc } from "html-to-ast/dist/parse";
import { characterKeyWords } from "../constants";

export interface TActionPayload {
  lineNumberIndex: number;
  component: string;
  class: string;
  id: string;
  type: string;
}
export type LineNumberJSX = {
  lineTextContent: string;
}[];

const characterSlice = createSlice({
  name: "character",
  initialState: [
    {
      type: "",
      component: "",
      class: "",
      id: "",
      lineNumberIndex: 0,
    },

    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    { type: "", component: "", class: "", id: "", lineNumberIndex: 0 },
    {
      type: "",
      component: "",
      class: "",
      id: "",
      lineNumberIndex: 0,
    },
  ],
  reducers: {
    setComponent(state: any[], action: PayloadAction<TActionPayload>) {
      const payload = action.payload;
      // 2. check if the the current line text being written has a component written
      state[payload.lineNumberIndex] = { ...payload };

      console.log(payload);
    },
  },
});
export const { setComponent } = characterSlice.actions;
export default characterSlice.reducer;
