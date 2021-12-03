import { splitLine } from '../../lib';

function invertBinary(input: string[]) {
  return input.map(char => char === '1' ? '0' : '1')
}

export function getMostPopularAtPosition(dataset: string[], index: number) {
  const binaryColumn = dataset.map(line => line.charAt(index)).join('');

  return {
    count1: (binaryColumn.match(/1/g) ?? []).length,
    count0: (binaryColumn.match(/0/g) ?? []).length,
  };
}

function getMostPopular(dataset: string[]): string[] {
  const binaryLength = dataset[0].length
  const mostPopular = new Array(binaryLength)

  for (let i = 0; i < binaryLength; i++) {
    const { count1, count0 } = getMostPopularAtPosition(dataset, i);
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
