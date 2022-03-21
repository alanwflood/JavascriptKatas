import { splitLine, sum } from '../../lib';

function mapDigitSimple(readout: string): number {
  const length = readout.length;
  switch (length) {
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

export function mapCalls(input: string): string[][] {
  return splitLine(input).map((line) => {
    const [_readout, calls] = line.split('|');
    return calls.split(' ');
  });
}

export function runner(input: string) {
  const lines = mapCalls(input);
  return sum(
    lines.map(
      (calls) => calls.map(mapDigitSimple).filter((value) => value > 0).length
    )
  );
}
