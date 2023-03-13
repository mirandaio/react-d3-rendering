const shapes = ['C', 'CR', 'D', 'SQ', 'S', 'T', 'W'];

const colors = [
  '#792359',
  '#64858e',
  '#107e7d',
  '#758151',
  '#a77f90',
  '#97703b',
  '#545c52',
  '#b88c9e',
  '#438067',
  '#798792',
];

export const MAX_X = 15000;
export const MAX_Y = 10000;

export function generateData(numDataPoints) {
  const data = [];

  for (let i = 0; i < numDataPoints; i++) {
    data.push({
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      x: Math.random() * MAX_X,
      y: Math.random() * MAX_Y,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  return data;
}

export const WIDTH = 1100;
export const HEIGHT = 580;
export const SIZE = 1000;
