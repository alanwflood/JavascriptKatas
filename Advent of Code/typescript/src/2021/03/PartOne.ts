import { splitLine } from '../../lib';

function invertBinary(input: string[]) {
  return input.map(char => char === '1' ? '0' : '1')
}

export function countAtPosition(dataset: string[], index: number) {
  const count1 = (dataset
    .map(line => line.charAt(index))
    .join('')
    .match(/1/g
  ) ?? []).length;

  return {
    count1,
    count0: dataset.length - count1,
  };
}

function getMostPopular(dataset: string[]): string[] {
  const binaryLength = dataset[0].length
  const mostPopular = new Array(binaryLength)

  for (let i = 0; i < binaryLength; i++) {
    const { count1, count0 } = countAtPosition(dataset, i);
    mostPopular[i] = (count1 > count0 ? '1' : '0');
  }

  return mostPopular;
}

function getPopularity(dataset: string[]) {
  const mostPopular = getMostPopular(dataset);
  return {
    mostPopular: mostPopular.join(''),
    leastPopular: invertBinary(mostPopular).join('')
  };
}

function computeBinaryPopularity(input: string): {
  mostPopular: string,
  leastPopular: string
} {
  return getPopularity(splitLine(input))
}


export function runner(input: string) {
  const {
    mostPopular: gamma,
    leastPopular: epsilon
  } = computeBinaryPopularity(input);

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}
