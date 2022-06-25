import { splitLine } from '../../lib';

export type CaveList = Map<string, string[]>;
export type VisitedCaveList = string[];

export function isSmallCave(cave: string) {
  return cave.toLowerCase() === cave;
}

function getPaths(
  caveList: CaveList,
  visitedSmallCaves: VisitedCaveList,
  cave: string
) {
  if (cave === 'end') return 1;

  let generatedPaths = 0;
  const linkedCaves = caveList.get(cave)!;

  for (const linkedCave of linkedCaves) {
    if (visitedSmallCaves.includes(linkedCave)) continue;
    const newVisitedList: VisitedCaveList = isSmallCave(linkedCave)
      ? [...visitedSmallCaves, linkedCave]
      : visitedSmallCaves;

    generatedPaths += getPaths(caveList, newVisitedList, linkedCave);
  }

  return generatedPaths;
}

function addLink(links: CaveList, caveA: string, caveB: string) {
  links.set(caveA, [...links.get(caveA) ?? [], caveB]);
}

export function buildTree(input: string) {
  const caveList = new Map();
  const lines = splitLine(input);

  for (const line of lines) {
    const [caveA, caveB] = line.split('-');
    addLink(caveList, caveA, caveB);
    addLink(caveList, caveB, caveA);
  }

  return caveList;
}

export function runner(input: string) {
  const tree = buildTree(input);
  return getPaths(tree, ['start'], 'start');
}
