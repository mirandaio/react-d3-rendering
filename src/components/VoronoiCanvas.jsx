import { useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import * as d3 from 'd3';
import { WIDTH, HEIGHT, PADDING, MAX_X, MAX_Y } from '../generate-data';

const xScale = d3
  .scaleLinear()
  .domain([0, MAX_X])
  .range([PADDING, WIDTH - PADDING]);

const yScale = d3
  .scaleLinear()
  .domain([0, MAX_Y])
  .range([HEIGHT - PADDING, PADDING]);

const render = (data, ctx) => {
  const delaunay = d3.Delaunay.from(
    data,
    (d) => xScale(d.x),
    (d) => yScale(d.y)
  );
  const voronoi = delaunay.voronoi([0, 0, WIDTH, HEIGHT]);
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.strokeStyle = '#aaa';

  data.forEach((d, i) => {
    ctx.beginPath();
    voronoi.renderCell(i, ctx);
    ctx.fillStyle = d.color;
    ctx.stroke();
    ctx.fill();
  });

  ctx.beginPath();
  ctx.fillStyle = 'black';
  delaunay.renderPoints(ctx);
  ctx.fill();
};

export default function VoronoiCanvas() {
  const [data, setData] = useOutletContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    render(data, canvasRef.current.getContext('2d'));
  }, [data]);

  const handleOnMouseMove = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const newData = [...data];
    newData[0] = {
      ...newData[0],
      x: xScale.invert(event.clientX - rect.left),
      y: yScale.invert(event.clientY - rect.top),
    };

    setData(newData);
  };

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      onMouseMove={handleOnMouseMove}
    />
  );
}
