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

export default function VoronoiD3() {
  const data = useOutletContext();
  const svgRef = useRef(null);

  useEffect(() => {
    const delaunay = d3.Delaunay.from(
      data,
      (d) => xScale(d.x),
      (d) => yScale(d.y)
    );
    const voronoi = delaunay.voronoi([0, 0, WIDTH, HEIGHT]);

    d3.select(svgRef.current)
      .selectAll('path')
      .data(data)
      .join('path')
      .attr('d', (d, i) => voronoi.renderCell(i))
      .attr('fill', (d) => d.color)
      .attr('stroke', '#aaa');

    d3.select(svgRef.current)
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', 2)
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y));
  }, [data]);

  return <svg ref={svgRef} width={WIDTH} height={HEIGHT} />;
}
