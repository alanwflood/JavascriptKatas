export function runner(input: string) {
  const dataset = input.split(/\r?\n/).map(line => parseInt(line, 10));

  let count = 0;
  let i = 0;
  while(i++ < dataset.length) {
    if (dataset[i] > dataset[i - 1]) count++
  }
  return count;
}

