import { splitLine } from '../../lib';

export type ClosingBrace = ')' | ']' | '}' | '>';
export type OpeningBrace = '(' | '[' | '{' | '<';

export type BraceMap = {
  [brace in ClosingBrace]: any;
};

const braceMap: Readonly<BraceMap> = Object.freeze({
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
});

type ComputeLineResult = {
  stack: OpeningBrace[],
  invalidBrace?: ClosingBrace
}

export function computeLine(input: string): ComputeLineResult {
  let open = ['{', '(', '[', '<'];
  let close = ['}', ')', ']', '>'];

  let stack: OpeningBrace[] = [];
  for (let i = 0; i < input.length; i++) {
    if (open.indexOf(input[i]) >= 0) {
      stack.push(input[i] as OpeningBrace);
    } else {
      if (stack.pop() !== open[close.indexOf(input[i])]) {
        return {
          stack,
          invalidBrace: input[i] as ClosingBrace,
        }
      }
    }
  }

  return {
    stack,
  };
}

export function runner(input: string) {
  const lines = splitLine(input);
  const braceCount: BraceMap = Object.assign(
    {},
    ...Object.keys(braceMap).map((brace) => ({
      [brace]: 0,
    }))
  );

  for (const line of lines) {
    const { invalidBrace } = computeLine(line);
    if (invalidBrace) {
      braceCount[invalidBrace] =
        braceCount[invalidBrace] + 1;
    }
  }

  let total = 0;
  for (const [key, value] of Object.entries(braceCount)) {
    total += braceMap[key as ClosingBrace] * value;
  }

  return total;
}
