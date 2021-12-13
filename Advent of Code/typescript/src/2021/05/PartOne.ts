import { splitLine, sum } from '../../lib';

type Coords = [x: number, y: number];
type Line = [from: Coords, to: Coords];
type LineMap = number[][];

const enum Operation {
  ADD,
  SUBTRACT,
}

export function mapLines(input: string): Line[] {
  const lines = splitLine(input);
  const Lines: Line[] = lines.map((line) => {
    const [rawFrom, rawTo] = line.split(' -> ');

    const [fromX, fromY] = rawFrom.split(',').map((num) => parseInt(num, 10));
    const from: Coords = [fromX, fromY];

    const [toX, toY] = rawTo.split(',').map((num) => parseInt(num, 10));
    const to: Coords = [toX, toY];

    return [from, to];
  });

  return Lines;
}

function getMaxCoord(Lines: Line[], index: number): number {
  return Math.max(
    ...Lines.map(([from, to]) =>
      from[index] > to[index] ? from[index] : to[index]
    )
  );
}

function getOverlapCount(lineMap: LineMap): number {
  return sum(lineMap.map((line) => line.filter((num) => num >= 2).length));
}

function initialiseLineMap(lines: Line[]): LineMap {
  const maxX = getMaxCoord(lines, 0);
  const maxY = getMaxCoord(lines, 1);

  const map: LineMap = new Array(maxY + 1);
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(maxX + 1).fill(0);
  }
  return map;
}

function getMinMax(a: number, b: number) {
  return [Math.min(a, b), Math.max(a, b)];
}

export function mapFloor(lines: Line[], includeDiagonals: boolean = false) {
  const map = initialiseLineMap(lines);

  for (const [[fromX, fromY], [toX, toY]] of lines) {
    const isHorizontal = fromX === toX;
    const isVertical = fromY === toY;

    if (isVertical) {
      const [start, end] = getMinMax(fromX, toX);
      for (let x = start; x <= end; x++) {
        map[fromY][x]++;
      }
    }

    if (isHorizontal) {
      const [start, end] = getMinMax(fromY, toY);
      for (let y = start; y <= end; y++) {
        map[y][fromX]++;
      }
    }

    if (
      includeDiagonals === true &&
      isHorizontal === false &&
      isVertical === false
    ) {
      // Determine which way the line is going.
      const xOp = fromX > toX ? Operation.SUBTRACT : Operation.ADD;
      const yOp = fromY > toY ? Operation.SUBTRACT : Operation.ADD;

      let curX = fromX;
      let curY = fromY;
      const coords: Coords[] = [];

      coords.push([curX, curY]);

      // traverse diagonally.
      while (curX !== toX && curY !== toY) {
        curX += xOp === Operation.ADD ? 1 : -1;
        curY += yOp === Operation.ADD ? 1 : -1;
        coords.push([curX, curY]);
      }

      // Mark the diagonal.
      for (const [x, y] of coords) {
        map[y][x]++;
      }
    }
  }

  return getOverlapCount(map);
}

export function runner(input: string) {
  const lines = mapLines(input);
  return mapFloor(lines);
}
