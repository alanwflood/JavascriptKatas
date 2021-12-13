import { mapLines, mapFloor } from './PartOne';

export function runner(input: string) {
  const lines = mapLines(input);
  return mapFloor(lines, true);
}
