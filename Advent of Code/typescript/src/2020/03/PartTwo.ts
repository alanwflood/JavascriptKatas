import { runner as partOne } from './PartOne';

export function runner(input: string): number {
  return [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ].reduce((total, value) => total * partOne(input, value[0], value[1]), 1)
}
