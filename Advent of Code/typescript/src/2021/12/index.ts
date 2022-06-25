import { read, runPart } from '../../lib'
import { runner as PartOne } from './PartOne';
import { runner as PartTwo } from './PartTwo';

async function getInput() {
  const { input } = await read(2021, 12)();
  return input;
}

export const answerOne = () => runPart('one', getInput, PartOne);
answerOne();
export const answerTwo = () => runPart('two', getInput, PartTwo);
answerTwo();
