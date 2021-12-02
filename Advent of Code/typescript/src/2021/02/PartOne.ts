import { splitLine } from '../../lib';

export const enum Direction {
  forward = 'forward',
  down = 'down',
  up = 'up',
}

type DirectionType = `${Direction}`

type Movement = [DirectionType, number];

export function mapMovements(input: string): Movement[] {
  return splitLine(input)
    .map((line: string) => {
      const [direction, number] = line.trim().split(' ');
      return [direction as DirectionType, parseInt(number, 10)];
    });
}

export function runner(input: string) {
  let x = 0;
  let y = 0;

  for (let [direction, value] of mapMovements(input)) {
    switch(direction)  {
      case Direction.forward:
         x += value;
         break;
      case Direction.down:
         y += value;
         break;
      case Direction.up:
         y -= value;
         break;
    }
  }

  return x * y;
}
