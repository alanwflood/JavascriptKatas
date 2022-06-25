import { isSmallCave, buildTree, CaveList, VisitedCaveList } from './PartOne';

const REPEAT_VISIT = 'REPEAT_VISIT';

function hasVisitedCave(visitedCaveList: VisitedCaveList, cave: string) {
  return cave === 'start' || [cave, REPEAT_VISIT].every(value => visitedCaveList.includes(value));
}

function getVisitedCaves(visitedCaveList: VisitedCaveList, cave: string) {
  if (isSmallCave(cave) === false) return visitedCaveList;
  if (visitedCaveList.includes(cave)) return [...visitedCaveList, REPEAT_VISIT];
  return [...visitedCaveList, cave];
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
    if (hasVisitedCave(visitedSmallCaves, linkedCave)) continue;
    generatedPaths += getPaths(
      caveList,
      getVisitedCaves(visitedSmallCaves, linkedCave),
      linkedCave
    );
  }

  return generatedPaths;
}

export function runner(input: string) {
  const tree = buildTree(input);
  return getPaths(tree, ['start'], 'start');
}
