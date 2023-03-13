import * as d3 from "d3";
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
  .range([0, WIDTH - 2 * PADDING]);

const yScale = d3
  .scaleLinear()
  .domain([0, MAX_Y])
  .range([HEIGHT - 2 * PADDING, 0]);

export default function ReactRendering() {
  return (
    <svg width={WIDTH} height={HEIGHT} style={{ outline: "1px solid red" }}>
      <g transform={`translate(${PADDING}, ${PADDING})`}>
        {data.map((d, i) => {
          return (
            <path
              d={pathData[d.shape]}
              key={i}
              fill={d.color}
              stroke="#999"
              transform={`translate(${xScale(d.x)}, ${yScale(d.y)})`}
            />
          );
        })}
      </g>
    </svg>
  );
}
