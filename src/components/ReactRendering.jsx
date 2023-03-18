import * as d3 from 'd3';
import {
  data,
  pathData,
  WIDTH,
  HEIGHT,
  PADDING,
  MAX_X,
  MAX_Y,
} from '../generate-data';

const xScale = d3
  .scaleLinear()
  .domain([0, MAX_X])
  .range([PADDING, WIDTH - PADDING]);

const yScale = d3
  .scaleLinear()
  .domain([0, MAX_Y])
  .range([HEIGHT - PADDING, PADDING]);

export default function ReactRendering() {
  return (
    <svg width={WIDTH} height={HEIGHT}>
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
    </svg>
  );
}
