import { read } from '../../lib'
import { runner as PartOne } from './PartOne';
import { runner as PartTwo } from './PartTwo';

async function getInput() {
  const { input } = await read(2021, 6)();
  return input;
}

export const answerOne = async () => {
  const input = await getInput();

  console.time("one");
  const answer = PartOne(input);
  console.timeEnd("one");

  console.log(answer);

  return answer;
}

answerOne();

export const answerTwo = async () => {
  const input = await getInput();

  console.time("two");
  const answer = PartTwo(input);
  console.timeEnd("two");

  console.log(answer);

  return answer;
}

answerTwo();
