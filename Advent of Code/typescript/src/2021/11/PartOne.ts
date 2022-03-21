import { splitLine, splitChars } from '../../lib';

function readGrid(input: string): number[][] {
  return splitLine(input).map(line => splitChars(line).map(char => Number.parseInt(char, 10)));
}

export class Grid {
  value: number[][]
  stack: number[][]
  step: number
  activeCount: number
  flashes: number

  constructor(input: string | number[][]) {
    this.step = 0;
    this.flashes = 0;
    this.activeCount = 0;
    this.stack = []

    if (typeof input === 'string') {
      this.value = readGrid(input)
      return
    }

    if (input instanceof Array) {
      this.value = input
      return
    }

    this.value = [[]]
  }

  get width() { // columns
    return this.value[0].length
  }

  get height() { // rows
    return this.value.length
  }

  get area() {
    return this.width * this.height
  }

  increment(x: number, y: number, flashing: boolean = false) {
    const currentValue = this.value[y][x];

    if (currentValue === 0 && flashing) {
      return;
    }

    if (currentValue === 9) {
      this.value[y][x] = 0;
      this.activeCount++;
      if (flashing) this.requestFlash(x, y)
    } else {
      this.value[y][x]++;
    }
  }

  flash(x: number, y: number) {
    this.flashes++;

    const left = x - 1;
    const right = x + 1;
    const top = y - 1;
    const bottom = y + 1;

    const canIncrementLeft = left >= 0;
    const canIncrementRight = right < this.width;
    const canIncrementTop = top >= 0;
    const canIncrementBottom = bottom < this.height;

    if (canIncrementLeft) this.increment(left, y, true)
    if (canIncrementRight) this.increment(right, y, true)

    if (canIncrementTop) {
      this.increment(x, top, true)
      if (canIncrementLeft) this.increment(left, top, true)
      if (canIncrementRight) this.increment(right, top, true)
    }

    if (canIncrementBottom) {
      this.increment(x, bottom, true)
      if (canIncrementLeft) this.increment(left, bottom, true)
      if (canIncrementRight) this.increment(right, bottom, true)
    }
  }

  requestFlash(x: number, y: number) {
    this.stack.push([x, y])
  }


  run() {
    this.activeCount = 0;

    for (let y = 0; y < this.height; y++)  {
      for (let x = 0; x < this.width; x++)  {
        this.increment(x, y)
        if (this.value[y][x] === 0) {
          this.requestFlash(x, y)
        }
      }
    }

    for (const action of this.stack) {
      this.flash(action[0], action[1]);
    }

    this.step++;
    this.stack = [];
  }

  print() {
    console.log(`Step: ${this.step}`);
    console.log(`==========================`);
    console.log(`Flashes: ${this.flashes}`);
    console.log(`Zeros: ${this.activeCount}`);
    console.log(`W x H: ${this.width} x ${this.height}`);
    console.log(`==========================`);
    console.table(this.value)
  }
}

export function runner(input: string) {
  const grid = new Grid(input)

  let counter = 100;

  while(counter--) {
    grid.run();
  }

  return grid.flashes;
}
