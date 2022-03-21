import { promises } from 'fs';
import { resolve } from 'path';

export interface Input<T, A = undefined> {
  input: T;
  args?: A | undefined;
}

export function read<A>(year: number, day: number, file = 'input.txt') {
  return async (): Promise<Input<string, A>> => {
    const baseUrl = `./resources/${year}/${day < 10 ? '0' + day : day}/`;

    const [input, args] = await Promise.all([
      promises.readFile(resolve(`${baseUrl}${file}`), {
        encoding: 'utf-8',
      }) as Promise<string>,
      promises
        .readFile(`${baseUrl}${file.split(/(.*)\..*/)[1]}.args.json`, {
          encoding: 'utf-8',
        })
        .catch(() => undefined) as Promise<string>,
    ]);

    return { input, args: args && JSON.parse(args) };
  };
}

export async function runPart(
  label: string,
  getInput: () => Promise<string>,
  runner: (input: string) => string | number
) {
  const input = await getInput();

  console.time(label);
  const answer = runner(input);
  console.timeEnd(label);

  console.log(answer);

  return answer;
}

function splitFilter(delimiter: string | RegExp, string: string) {
  return string.split(delimiter).filter(Boolean);
}

export function splitChars(string: string) {
  return splitFilter('', string)
}

export function splitWhitespace(string: string) {
  return splitFilter('\s+', string)
}

export function splitLine(string: string) {
  return splitFilter(/\r?\n/, string)
}

export function splitBlankLine(string: string) {
  return splitFilter('\n\n', string)
}

export function parseCommmaDelimitedNumbers(string: string) {
  return string.split(',').map((number) => parseInt(number, 10));
}

export function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

export function mult(array: number[]): number {
  return array.reduce((a, b) => a * b, 1);
}

export function median(numberArray: number[]) {
  const array = numberArray.slice().sort((a, b) => a - b);

  // array with even number elements
  if (array.length % 2 === 0) {
    return (array[array.length/2] + array[(array.length / 2) - 1]) / 2;
  }

  // array with odd number elements
  return array[Math.floor(array.length / 2)];
};

