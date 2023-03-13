import * as d3 from "d3";
import { useEffect, useRef } from "react";

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
  useEffect(() => {
    console.log("render with d3 here");
  }, []);

  return (
    <>
      <h1>D3 rendering</h1>
      <svg width={WIDTH} height={HEIGHT}>
        <g />
      </svg>
    </>
  );
}
