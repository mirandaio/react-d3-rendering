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

const xScale = d3
  .scaleLinear()
  .domain([0, MAX_X])
  .range([PADDING, WIDTH - PADDING]);

const yScale = d3
  .scaleLinear()
  .domain([0, MAX_Y])
  .range([HEIGHT - PADDING, PADDING]);

export default function CanvasRendering() {
  const data = useOutletContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const generators = {
      C: d3.symbol().type(d3.symbolCircle).size(SIZE).context(ctx),
      CR: d3.symbol().type(d3.symbolCross).size(SIZE).context(ctx),
      D: d3.symbol().type(d3.symbolDiamond).size(SIZE).context(ctx),
      SQ: d3.symbol().type(d3.symbolSquare).size(SIZE).context(ctx),
      S: d3.symbol().type(d3.symbolStar).size(SIZE).context(ctx),
      T: d3.symbol().type(d3.symbolTriangle).size(SIZE).context(ctx),
      W: d3.symbol().type(d3.symbolWye).size(SIZE).context(ctx),
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#999';

    data.forEach((d) => {
      ctx.save();
      ctx.fillStyle = d.color;
      ctx.translate(xScale(d.x), yScale(d.y));
      ctx.beginPath();
      generators[d.shape]();
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      ctx.restore();
    });
  }, [data]);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />;
}
