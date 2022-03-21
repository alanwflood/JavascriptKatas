import { splitChars, splitLine } from '../../lib';

export type Grid = number[][];

export function createGrid(input: string): Grid {
  return splitLine(input).map((line) =>
    splitChars(line).map((num) => parseInt(num, 10))
  );
}

export function runner(input: string) {
  const grid = createGrid(input);

  let totalRisk = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      totalRisk += dfs(grid, y, x);
    }
  }

  return totalRisk;
}

function dfs(grid: Grid, y: number, x: number): number {
  const maxNum = 10;
  const currentHeight = grid[y][x];

  const positionAbove = y === 0 ? maxNum : grid[y - 1][x];
  const positionBelow = y === grid.length - 1 ? maxNum : grid[y + 1][x];

  const positionLeft = x === 0 ? maxNum : grid[y][x - 1];
  const positionRight = x === grid[y].length - 1 ? maxNum : grid[y][x + 1];

  return [positionAbove, positionLeft, positionRight, positionBelow].every(
    (position) => position > currentHeight
  )
    ? currentHeight + 1
    : 0;
}
