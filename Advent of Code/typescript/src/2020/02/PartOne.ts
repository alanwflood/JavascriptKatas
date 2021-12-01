export interface PasswordPolicy {
  min: number;
  max: number;
  char: string;
  password: string;
}

export const lineMatcher = /^(\d+)-(\d+) (\w): (\w+)$/;

export function createDataset(input: string): PasswordPolicy[] {
  return input
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const [, min, max, char, password] = line.match(lineMatcher) ?? [];
      return {
        min: parseInt(min, 10),
        max: parseInt(max, 10),
        char,
        password,
      };
    });
}

export function runner(input: string) {
  return createDataset(input).filter(({ min, max, char, password }) => {
    const matches = password.split(char).length - 1;
    return matches >= min && matches <= max;
  }).length;
}
