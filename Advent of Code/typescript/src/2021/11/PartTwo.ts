import { Grid } from './PartOne';

export function runner(input: string) {
  const grid = new Grid(input)
  let counter = 0;
  while(grid.activeCount !== grid.area) {
    grid.run();
    counter++
  }

  return counter;
}
