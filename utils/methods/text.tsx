import { parse } from "html-to-ast";
import { MaybeDoc } from "html-to-ast/dist/parse";
import * as constants from "../../constants";

const Text = {
  findAndSplitJsKeyWordsArr(input: string): string[] {
    return input.split(/(type|class|id|function|h1|h2|h3|h4|h5|h6|=|1)/g);
  },
  removeExtraQuotes(str: string) {
    return str.replace(/[‘’“”"]/g, "");
  },
  parsTextGetHTML(inputValue: string) {
    let ast: MaybeDoc | any = parse(inputValue)[0];
    let nameExists = ast?.name;
    if (nameExists) {
      if (constants.characterKeyWords.includes(nameExists) && ast.voidElement) {
        const keysToCheck = ["id", "class", "type"];
        // if there is an attr that is not in the keyToCheck Remove it
        Object.keys(ast.attrs).forEach((key) => {
          if (!keysToCheck.includes(key)) {
            delete ast.attrs[key];
          }
        });
        // make sure that keys to check are allways in the obj
        keysToCheck.forEach((key) => {
          if (!(key in ast.attrs)) {
            ast.attrs[key] = "";
          }
        });
        // remove not needed keys
        delete ast.voidElement;
        delete ast.type;
        delete ast.children;
        // depending on the user they may type in qoutes or not so remove them

        return {
          type: this.removeExtraQuotes(ast.attrs.type),
          component: ast.name,
          class: this.removeExtraQuotes(ast.attrs.class),
          id: this.removeExtraQuotes(ast.attrs.id),
        };
      }
    }

    return {
      class: "",
      id: "",
      type: "",
      component: "",
    };
  },
};
export default Text;
