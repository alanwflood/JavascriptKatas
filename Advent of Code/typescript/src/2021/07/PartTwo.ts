import { median, sum, parseCommmaDelimitedNumbers } from '../../lib';

export function runner(input: string) {
  const crabLocations = parseCommmaDelimitedNumbers(input);
  const midPoint = median(crabLocations);

  return sum(crabLocations.map(position => Math.abs(position - midPoint)))
}
