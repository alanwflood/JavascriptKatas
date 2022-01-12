import { sum, parseCommmaDelimitedNumbers } from '../../lib';

export function runner(input: string) {
  const crabLocations = parseCommmaDelimitedNumbers(input);
  const midPoint = median(crabLocations);

  return sum(crabLocations.map(position => Math.abs(position - midPoint)))
}

function median(numberArray: number[]) {
  const array = numberArray.slice().sort((a, b) => a - b);

  // array with even number elements
  if (array.length % 2 === 0) {
    return (array[array.length/2] + array[(array.length / 2) - 1]) / 2;
  }

  // array with odd number elements
  return array[Math.floor(array.length) / 2];
};

