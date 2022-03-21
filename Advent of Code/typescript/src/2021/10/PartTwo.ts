import { computeLine, OpeningBrace } from './PartOne';
import { splitLine, median } from '../../lib';

type OpeningBraceMap = {
  [brace in OpeningBrace]: number;
};

const braceMap: OpeningBraceMap = {
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4,
};

function completeStack(stackToComplete: OpeningBrace[]): number {
  let i = stackToComplete.length;
  let score = 0;
  while (i--) {
    score = score * 5;
    const brace = stackToComplete[i];
    score += braceMap[brace];
  }
  return score;
}

export function runner(input: string) {
  const lines = splitLine(input);

  const stacksToComplete: OpeningBrace[][] = lines
    .map((line) => {
      const { stack, invalidBrace } = computeLine(line);
      return invalidBrace === undefined ? stack : [];
    })
    .filter((stack) => stack.length)

  const stackValues = stacksToComplete.map(
    stack => completeStack(stack)
  ).sort()

  console.log({ median: median(stackValues.sort()) })

  return median(stackValues.sort());
}
