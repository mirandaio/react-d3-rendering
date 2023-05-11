import * as d3 from 'd3';
import {
  SIZE,
  WIDTH,
  HEIGHT,
  PADDING,
  MAX_X,
  MAX_Y,
  data,
} from '../generate-data';

const circlePathData = d3.symbol().type(d3.symbolCircle).size(SIZE)();
const crossPathData = d3.symbol().type(d3.symbolCross).size(SIZE)();
const diamondPathData = d3.symbol().type(d3.symbolDiamond).size(SIZE)();
const squarePathData = d3.symbol().type(d3.symbolSquare).size(SIZE)();
const starPathData = d3.symbol().type(d3.symbolStar).size(SIZE)();
const trianglePathData = d3.symbol().type(d3.symbolTriangle).size(SIZE)();
const wyePathData = d3.symbol().type(d3.symbolWye).size(SIZE)();

export const pathData = {
  C: circlePathData,
  CR: crossPathData,
  D: diamondPathData,
  SQ: squarePathData,
  S: starPathData,
  T: trianglePathData,
  W: wyePathData,
};

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
