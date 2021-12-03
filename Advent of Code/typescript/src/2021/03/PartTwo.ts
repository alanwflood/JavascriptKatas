import { splitLine } from '../../lib';
import { getMostPopularAtPosition } from './PartOne';

function getRating(desiredChar: '0' | '1', dataset: string[]): string {
  let remainingValues = [...dataset];
  const otherChar = desiredChar === '0' ? '1' : '0';

  for (let i = 0; i < dataset[0].length; i += 1) {
    const { count0, count1 } = getMostPopularAtPosition(remainingValues, i);
    const charToFind = count1 >= count0 ? desiredChar : otherChar

    remainingValues = remainingValues
      .filter(line => line.charAt(i) === charToFind);

    if (remainingValues.length === 1) break;
  }
  return remainingValues[0]
}

export function runner(input: string) {
  const dataset = splitLine(input);

  let oxygenRating = getRating('1', dataset)
  let co2Rating = getRating('0', dataset)

  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
}

