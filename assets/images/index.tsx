type TImageAssets = {
  curriculum: {
    html: number;
    css: number;
    git: number;
    js: number;
    node: number;
    postgresql: number;
    mountain: number;
    spaceShip: number;
  };
  Topic: {
    TopSplash: number;
  };
};

const ImageAssets: TImageAssets = {
  curriculum: {
    html: require("./curriculumScreen/html.png"),
    css: require("./curriculumScreen/css.png"),
    git: require("./curriculumScreen/git.png"),
    js: require("./curriculumScreen/js.png"),
    node: require("./curriculumScreen/node.png"),
    postgresql: require("./curriculumScreen/postgresql.png"),
    mountain: require("./curriculumScreen/mountain.png"),
    spaceShip: require("./curriculumScreen/ships.png"),
  },
  Topic: {
    TopSplash: require("./Topic/TopSplash.png"),
  },
};
export default ImageAssets;
