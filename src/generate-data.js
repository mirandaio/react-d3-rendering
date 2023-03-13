import * as d3 from "d3";

const SIZE = 1000;
const NUM_DATA_POINTS = 10;

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

const shapes = Object.keys(pathData);
export const WIDTH = 900;
export const HEIGHT = 600;
export const PADDING = 30;
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

export const data = generateData();
