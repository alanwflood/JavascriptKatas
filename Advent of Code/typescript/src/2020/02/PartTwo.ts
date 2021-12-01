import { createDataset } from './PartOne';

export function runner(input: string) {
  return createDataset(input).filter(
    ({ min: p1, max: p2, char, password }) => (password.charAt(p1) === char) !== (password.charAt(p2) === char)
  ).length;
}
