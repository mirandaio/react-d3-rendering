import * as d3 from "d3";
import { useRef, useEffect } from "react";

import {
  data,
  pathData,
  WIDTH,
  HEIGHT,
  PADDING,
  MAX_X,
  MAX_Y,
} from "../generate-data";

const xScale = d3
  .scaleLinear()
  .domain([0, MAX_X])
  .range([PADDING, WIDTH - PADDING]);

const yScale = d3
  .scaleLinear()
  .domain([0, MAX_Y])
  .range([HEIGHT - PADDING, PADDING]);

export default function D3Rendering() {
  const svgRef = useRef(null);

  useEffect(() => {
    d3.select(svgRef.current)
      .selectAll("path")
      .data(data)
      .join("path")
      .attr("d", (d) => pathData[d.shape])
      .attr("fill", (d) => d.color)
      .attr("stroke", "#999")
      .attr("transform", (d) => `translate(${xScale(d.x)}, ${yScale(d.y)})`);
  }, []);

  return (
    <svg
      ref={svgRef}
      width={WIDTH}
      height={HEIGHT}
      style={{ outline: "1px solid red" }}
    />
  );
}
