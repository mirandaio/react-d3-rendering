import { useOutletContext } from 'react-router-dom';
import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

import {
  SIZE,
  WIDTH,
  HEIGHT,
  PADDING,
  MAX_X,
  MAX_Y,
  // data,
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

export default function D3Rendering() {
  const data = useOutletContext();
  const svgRef = useRef(null);

  useEffect(() => {
    d3.select(svgRef.current)
      .selectAll('path')
      .data(data)
      .join('path')
      .attr('d', (d) => pathData[d.shape])
      .attr('fill', (d) => d.color)
      .attr('stroke', '#999')
      .attr('transform', (d) => `translate(${xScale(d.x)}, ${yScale(d.y)})`);
  }, [data]);

  return <svg ref={svgRef} width={WIDTH} height={HEIGHT} />;
}
