import { splitLine, sum } from '../../lib';

type Readout = {
  readout: string[],
  calls: string[]
}

function mapDigitSimple(readout: string): number {
  const length = readout.length;
  switch(length) {
    case 2:
      return 1;
    case 4:
      return 4;
    case 3:
     return 7;
    case 7:
      return 8;
    default:
      return 0;
  }
}

export function mapReadout(input: string): Readout[] {
  return splitLine(input)
    .map(line => {
     const [readout, calls] = line.split('|');
     return {
       readout: readout.split(' '),
       calls: calls.split(' ')
     }
  });
}

export function runner(input: string) {
  const lines = mapReadout(input)
  return sum(lines
    .map(({ calls }) => calls
      .map(mapDigitSimple).
      filter(value => value > 0).length)
  )
};

