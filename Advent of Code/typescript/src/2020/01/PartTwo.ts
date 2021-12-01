export function runner(input: string) {
  const dataset = input.split(/\r?\n/).map(line => parseInt(line, 10));
  const desiredNumber = 2020;

  for (let i = 0; i < dataset.length; i++) {
    const n1 = dataset[i];

    for (let j = 0; j < dataset.length; j++) {
      if (i === j) continue;

      const n2 = dataset[j];
      const numberToFind = desiredNumber - (n1 + n2);
      const didFindNumber = dataset.indexOf(numberToFind) >= 0;

      if (didFindNumber) {
        return n1 * n2 * numberToFind;
      }
    }
  }

  return -1;
}
