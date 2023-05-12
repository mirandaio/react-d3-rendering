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

export default function VoronoiCanvas() {
  const data = useOutletContext();
  const canvasRef = useRef(null);

  const update = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const delaunay = d3.Delaunay.from(
      data,
      (d) => xScale(d.x),
      (d) => yScale(d.y)
    );
    const voronoi = delaunay.voronoi([0, 0, WIDTH, HEIGHT]);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  /* useEffect(() => {
    canvasRef.current.addEventListener('mousemove', (event) => {
      event.preventDefault();
      data[0] = {
        ...data[0],
        x: xScale.invert(event.layerX),
        y: yScale.invert(event.layerY),
      };
      update();
    });
  }, []); */

  useEffect(() => {
    update();
  }, [data]);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />;
}
