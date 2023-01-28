import Svg, { Circle, Polygon, G, Rect } from "react-native-svg";

const mouth = [
  <Polygon
    id="mouth-1"
    points="186.8,177.3 181.9,177.3 177,177.3 172.1,177.3 167.2,177.3 162.3,177.3 
				157.3,177.3 152.5,177.3 152.5,182.2 157.3,182.2 157.3,187.1 162.3,187.1 162.3,192 167.2,192 172.1,192 177,192 181.9,192 
				181.9,187.1 186.8,187.1 186.8,182.2 191.7,182.2 191.7,177.3"
  />,
  <Polygon
    id="mouth-2"
    points="186.8,182.2 181.9,182.2 177,182.2 172.1,182.2 167.2,182.2 167.2,177.3 
				162.3,177.3 157.3,177.3 152.5,177.3 152.5,182.2 157.3,182.2 157.3,187.1 162.3,187.1 167.2,187.1 172.1,187.1 177,187.1 
				181.9,187.1 186.8,187.1 191.7,187.1 191.7,182.2"
  />,

  <Polygon
    id="mouth-3"
    points="196.6,177.3 196.6,172.3 191.7,172.3 186.8,172.3 181.9,172.3 177,172.3 
				172.1,172.3 167.2,172.3 162.3,172.3 162.3,177.3 157.3,177.3 152.5,177.3 152.5,182.2 157.3,182.2 157.3,187.1 162.3,187.1 
				167.2,187.1 167.2,192 172.1,192 177,192 181.9,192 186.8,192 186.8,187.1 191.7,187.1 196.6,187.1 196.6,182.2 201.5,182.2 
				201.5,177.3"
  />,

  <Polygon
    id="mouth-4"
    points="186.8,177.3 181.9,177.3 177,177.3 172.1,177.3 167.2,177.3 167.2,182.2 
				167.2,187.1 167.2,192 172.1,192 177,192 181.9,192 186.8,192 186.8,187.1 191.7,187.1 191.7,182.2 191.7,177.3"
  />,

  <Polygon
    id="mouth-5"
    points="181.9,177.3 177,177.3 172.1,177.3 167.2,177.3 167.2,182.2 167.2,187.1 
				167.2,192 172.1,192 177,192 181.9,192 186.8,192 186.8,187.1 186.8,182.2 186.8,177.3"
  />,
  <Polygon
    id="mouth-6"
    points="172.1,177.3 167.2,177.3 167.2,182.2 167.2,187.1 172.1,187.1 177,187.1 
				177,182.2 177,177.3"
  />,

  <G id="mouth-7">
    <Rect x="206.4" y="172.3" width="4.9" height="4.9" />
    <Rect x="201.5" y="177.3" width="4.9" height="4.9" />
    <Polygon
      points="191.7,182.2 191.7,177.3 186.8,177.3 186.8,182.2 181.9,182.2 181.9,177.3 
					177,177.3 177,182.2 172.1,182.2 172.1,177.3 167.2,177.3 167.2,182.2 162.3,182.2 162.3,177.3 157.3,177.3 157.3,182.2 
					152.5,182.2 152.5,177.3 147.5,177.3 147.5,182.2 142.7,182.2 137.8,182.2 137.8,187.1 142.7,187.1 147.5,187.1 147.5,192 
					152.5,192 152.5,187.1 157.3,187.1 157.3,192 162.3,192 162.3,187.1 167.2,187.1 167.2,192 172.1,192 172.1,187.1 177,187.1 
					177,192 181.9,192 181.9,187.1 186.8,187.1 186.8,192 191.7,192 191.7,187.1 196.6,187.1 201.5,187.1 201.5,182.2 196.6,182.2 
									"
    />
    <Rect x="132.8" y="177.3" width="4.9" height="4.9" />
    <Rect x="127.9" y="172.3" width="4.9" height="4.9" />
  </G>,
  <Polygon
    id="mouth-8"
    points="177,162.5 177,157.6 172.1,157.6 167.2,157.6 162.3,157.6 157.3,157.6 
          157.3,162.5 157.3,167.5 152.5,167.5 152.5,172.3 152.5,177.3 152.5,182.2 152.5,187.1 152.5,192 157.3,192 157.3,196.9 
          157.3,201.8 162.3,201.8 167.2,201.8 172.1,201.8 172.1,196.9 177,196.9 177,192 177,187.1 181.9,187.1 181.9,182.2 181.9,177.3 
          181.9,172.3 181.9,167.5 181.9,162.5"
  />,

  <Polygon
    id="mouth-9"
    points="177,182.2 172.1,182.2 167.2,182.2 162.3,182.2 157.3,182.2 152.5,182.2 
				152.5,187.1 157.3,187.1 162.3,187.1 167.2,187.1 172.1,187.1 177,187.1 181.9,187.1 181.9,182.2"
  />,

  <Polygon
    id="mouth-10"
    points="196.6,167.5 196.6,172.3 191.7,172.3 191.7,177.3 186.8,177.3 181.9,177.3 
				177,177.3 172.1,177.3 167.2,177.3 162.3,177.3 157.3,177.3 152.5,177.3 152.5,172.3 147.5,172.3 147.5,167.5 142.7,167.5 
				142.7,172.3 142.7,177.3 147.5,177.3 147.5,182.2 152.5,182.2 152.5,187.1 157.3,187.1 157.3,192 162.3,192 167.2,192 172.1,192 
				177,192 181.9,192 186.8,192 186.8,187.1 191.7,187.1 191.7,182.2 196.6,182.2 196.6,177.3 201.5,177.3 201.5,172.3 201.5,167.5 
							"
  />,
];
export default mouth;