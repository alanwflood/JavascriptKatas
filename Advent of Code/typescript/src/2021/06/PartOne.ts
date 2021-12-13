import { sum } from '../../lib';

type Fishes = number[];
type FishCountMap = { [x: number]: number };

function initialiseFishCountMap(): FishCountMap {
  // Build up initial count
  return Object.fromEntries(
    Array.from(Array(9).keys()).map(number => ([number, 0]))
  )
}

function countFishes(fishes: Fishes): FishCountMap {
  const fishCountMap = initialiseFishCountMap();
  for (let fish of fishes) {
    fishCountMap[fish]++;
  }

  return fishCountMap;
}

function runFishGeneration(fishes: Fishes, cycles: number): FishCountMap {
  const fishCountMap = countFishes(fishes);

  let currentCycle = cycles;
  while(currentCycle--) {
    const spawningFish = fishCountMap[0];
    fishCountMap[0] = 0;

    let nextSwap;
    let prevSwap = fishCountMap[8];

    for(let i = 7; i >= 0; i--) {
      nextSwap = fishCountMap[i];
      fishCountMap[i] = prevSwap;
      prevSwap = nextSwap;
    }

    fishCountMap[8] = spawningFish;
    fishCountMap[6] += spawningFish;
  }

  return fishCountMap;
}

function parseFish(input: string): Fishes {
  return input.split(',').map(fish => parseInt(fish, 10));
}

export function runner(input: string, cycles: number = 80) {
  const fishCountMap = runFishGeneration(parseFish(input), cycles);
  return sum(Object.values(fishCountMap));
}
