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
  const data = useOutletContext();

  const delaunay = d3.Delaunay.from(
    data,
    (d) => xScale(d.x),
    (d) => yScale(d.y)
  );
  const voronoi = delaunay.voronoi([0, 0, WIDTH, HEIGHT]);

  return (
    <svg width={WIDTH} height={HEIGHT}>
      {data.map((d, i) => {
        return <path d={voronoi.renderCell(i)} stroke="#aaa" fill={d.color} />;
      })}
    </svg>
  );
}
