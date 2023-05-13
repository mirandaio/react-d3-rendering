import { useRef } from 'react';
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

export default function VoronoiReact() {
  const [data, setData] = useOutletContext();
  const svgRef = useRef(null);

  const delaunay = d3.Delaunay.from(
    data,
    (d) => xScale(d.x),
    (d) => yScale(d.y)
  );
  const voronoi = delaunay.voronoi([0, 0, WIDTH, HEIGHT]);

  const handleOnMouseMove = (event) => {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    const newData = [...data];
    newData[0] = {
      ...newData[0],
      x: xScale.invert(event.clientX - rect.left),
      y: yScale.invert(event.clientY - rect.top),
    };

    setData(newData);
  };

  return (
    <svg
      ref={svgRef}
      width={WIDTH}
      height={HEIGHT}
      onMouseMove={handleOnMouseMove}
    >
      {data.map((d, i) => {
        return (
          <path
            key={i}
            d={voronoi.renderCell(i)}
            stroke="#aaa"
            fill={d.color}
          />
        );
      })}
      {data.map((d, i) => {
        return <circle key={i} r="2" cx={xScale(d.x)} cy={yScale(d.y)} />;
      })}
    </svg>
  );
}
