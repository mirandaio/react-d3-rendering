import * as d3 from 'd3';

const shapes = ['C', 'CR', 'D', 'SQ', 'S', 'T', 'W'];
const NUM_DATA_POINTS = 10;

export const MAX_X = 15000;
export const MAX_Y = 10000;

function generateData() {
  const data = [];

  for (let i = 0; i < NUM_DATA_POINTS; i++) {
    data.push({
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      x: Math.random() * MAX_X,
      y: Math.random() * MAX_Y,
      color: d3.schemeSet3[Math.floor(Math.random() * 12)],
    });
  }

  return data;
}

export const WIDTH = 900;
export const HEIGHT = 600;
export const PADDING = 30;
export const SIZE = 1000;
export const data = generateData();
