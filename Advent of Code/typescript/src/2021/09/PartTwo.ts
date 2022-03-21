import { sum, mult } from '../../lib';
import { createGrid, Grid } from './PartOne';

export function runner(input: string) {
  const grid = createGrid(input);


  let totalBasins = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
       totalBasins.push(dfs(grid, y, x, 0));
    }
  }

  return mult(totalBasins.sort((a,b) => b - a).slice(0, 3));
}

function dfs(grid: Grid, y: number, x: number, size: number): number {
  if (
    y < 0 ||
    y >= grid.length ||
    x < 0 ||
    x >= grid[y].length ||
    grid[y][x] === 9
  ) return 0;

  grid[y][x] = 9;
  size += sum([
    dfs(grid, y - 1, x, size),
    dfs(grid, y + 1, x, size),
    dfs(grid, y, x - 1, size),
    dfs(grid, y, x + 1, size),
  ])

  return size + 1;
}

