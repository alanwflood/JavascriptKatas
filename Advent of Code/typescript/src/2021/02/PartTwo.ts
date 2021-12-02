import { Direction, mapMovements } from './PartOne';

export function runner(input: string) {
  let x = 0;
  let y = 0;
  let axis = 0;

  const movements = mapMovements(input)

  for (let [direction, value] of movements) {
    switch(direction)  {
      case Direction.forward:
         x += value;
         y += value * axis;
         break;
      case Direction.down:
         axis += value;
         break;
      case Direction.up:
         axis -= value;
         break;
    }
  }

  return x * y;
}
