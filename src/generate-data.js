import * as d3 from "d3";

const NUM_DATA_POINTS = 4;
const MAX_X = 15000;
const MAX_Y = 10000;

function generateData() {
  const data = [];

  for (let i = 0; i < NUM_DATA_POINTS; i++) {
    data.push({
      shape: "T",
      x: Math.random() * MAX_X,
      y: Math.random() * MAX_Y,
      color: d3.schemeSet3[Math.floor(Math.random() * 12)],
    });
  }

  return data;
}

const data = generateData();

export default data;
