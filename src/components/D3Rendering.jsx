import * as d3 from "d3";
import { useRef } from "react";

import {
  data,
  pathData,
  WIDTH,
  HEIGHT,
  PADDING,
  MAX_X,
  MAX_Y,
} from "../generate-data";

export default function D3Rendering() {
  return (
    <svg
      with={WIDTH}
      height={HEIGHT}
      style={{ outline: "1px solid red" }}
    ></svg>
  );
}
