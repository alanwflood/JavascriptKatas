import { splitLine, sum } from '../../lib';

type Letter = string;
type Weight = number;

type WeightMap = {
  [v: Letter]: Weight;
};

// Based on example from question
// acedgfb: 49 / 8
// cdfbe: 37 / 5
// gcdfa: 34 / 2
// fbcad: 39 / 3
// dab: 25 / 7
// cefabd: 45 / 9
// cdfgeb: 41 / 6
// eafb: 30 / 4
// cagedb: 42 / 0
// ab: 17 / 1
function mapWeight(weight: number): number {
  switch (weight) {
    case 17:
      return 1;
    case 34:
      return 2;
    case 39:
      return 3;
    case 30:
      return 4;
    case 37:
      return 5;
    case 41:
      return 6;
    case 25:
      return 7;
    case 49:
      return 8;
    case 45:
      return 9;
    case 42:
      return 0;
    default:
      throw new Error(`Unknown weight: ${weight}`);
  }
}

function splitStringsToLetters(readouts: string[]): Letter[][] {
  return readouts.filter(Boolean).map((readout) => readout.split(''));
}

function computeWeightForLetters(letters: Letter[], weights: WeightMap) {
  let total = 0;
  for (const letter of letters) {
    total += weights[letter];
  }
  return total;
}

function createWeightMap(readouts: string[]): WeightMap {
  const weightsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map((value) => [
    value,
    0,
  ]);

  const weightMap: WeightMap = Object.fromEntries(weightsArray);
  const readoutLetters: Letter[][] = splitStringsToLetters(readouts);

  for (const letters of readoutLetters) {
    for (const letter of letters) {
      weightMap[letter] += 1;
    }
  }

  return weightMap;
}

function mapStringsToDigits(strings: string[], weights: WeightMap) {
  const letters = splitStringsToLetters(strings);
  return letters.map((letters) =>
    mapWeight(computeWeightForLetters(letters, weights))
  );
}

function mapReadout(input: string) {
  return splitLine(input).map((line) => {
    const [readout, calls] = line.split('|');

    return Number(
      mapStringsToDigits(
        calls.split(' ').filter(Boolean),
        createWeightMap(readout.split(' '))
      ).join('')
    );
  });
}

export function runner(input: string) {
  return sum(mapReadout(input));
}
