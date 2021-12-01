export function runner(input: string) {
  const dataset = input.split(/\r?\n/).map(line => parseInt(line, 10));
  const desiredNumber = 2020;
  for (const number of dataset) {
    const otherNumber = desiredNumber - number;
    const didFindNumber = dataset.indexOf(otherNumber) >= 0;

    if (didFindNumber) {
      return number * otherNumber;
    }
  }

  return -1;
}

