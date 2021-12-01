import { splitLine } from '../../lib';

export function runner(input: string, right: number = 3, down: number = 1): number {
  const treeMap = splitLine(input)

  let x = right;
  let count = 0;
  let length = treeMap[0].length

  for (let y = down; y < treeMap.length; y += down) {
    if (treeMap[y].charAt(x) === '#') count++;
    x = (x + right) % length
  }

  return count;
}
