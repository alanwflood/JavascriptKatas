import { splitBlankLine } from '../../lib';

function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

interface Board {
  id: number,
  complete: number;
  rows: { [rowIndex: number]: number };
  cols: { [colIndex: number]: number };
  numbers: number[];
};

type Boards = {
  [x: number]: Board;
};

type BoardNumber = {
  value: number;
  boardId: number;
  row: number;
  col: number;
};

type BoardNumbers = {
  [x: number]: BoardNumber[];
};

class Board implements Board {
  constructor(id: number, rowLength: number, colLength: number, board: string) {
    this.id = id;
    this.complete = -1;
    this.rows = new Array(rowLength).fill(0);
    this.cols = new Array(colLength).fill(0);
    this.numbers = board
      .replace(/\n/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map(num => parseInt(num.trim(), 10))
  }
}

function mapRawBoardToBoardNumbers(
  board: string,
  index: number
): BoardNumber[] {
  return board
    .split('\n')
    .map((line, rowIndex) =>
      line
        .split(' ')
        .filter(Boolean)
        .map((num, colIndex) => ({
          value: parseInt(num.trim(), 10),
          boardId: index,
          row: rowIndex,
          col: colIndex,
        }))
    )
    .flat();
}

function mapCallout(callout: string): number[] {
  return callout.split(',').map((string) => parseInt(string, 10));
}

function mapInputToBingo(input: string) {
  const [rawCallout, ...rawBingoBoards] = splitBlankLine(input);

  const callout = mapCallout(rawCallout);
  const row = rawBingoBoards[0].split('\n');
  const rowLength = row.length;
  const colLength = row[0].split(' ').length;

  const boardNumbersArray = rawBingoBoards
    .map(mapRawBoardToBoardNumbers)
    .flat();

  const boards: Boards = Object.assign(
    {},
    ...rawBingoBoards
      .map((board, index) => ({
        [index]: new Board(index, rowLength, colLength, board)
      })),
  );

  const boardNumbers: BoardNumbers = Object.assign(
    {},
    ...boardNumbersArray.map(({ value }) => ({ [value]: [] }))
  );

  for (const boardNumber of boardNumbersArray) {
    boardNumbers[boardNumber.value].push(boardNumber)
  }

  return {
    callout,
    boards,
    boardNumbers,
  };
}

export function runner(input: string) {
  const { callout, boards, boardNumbers } = mapInputToBingo(input);
    const numberOfBoards = Object.keys(boards).length - 1;
    let completed = -1;
    // let firstWinner = [-1,-1];
    let lastWinner = [-1,-1];

    for (let i = 0; i < callout.length; i++) {
      const calledNumber = callout[i];
      const calledBoardNumbers = boardNumbers[calledNumber]

      for (const boardNumber of calledBoardNumbers) {
        const { boardId } = boardNumber;

        if (numberOfBoards === completed) break;
        if (boards[boardId].complete !== -1) continue;

        boards[boardId].rows[boardNumber.row]++;
        boards[boardId].cols[boardNumber.col]++;

        if (boards[boardId].rows[boardNumber.row] === 5 || boards[boardId].cols[boardNumber.col] === 5) {
          boards[boardId].complete = ++completed;

          // if (completed === 0) firstWinner = [i, boardId];
          if (numberOfBoards === completed) lastWinner = [i, boardId];
          console.log({ numberOfBoards, completed, calledNumber, i })
        }
      }
  }

  const lastNumber = callout[lastWinner[0]];
  const lastBoard = boards[lastWinner[1]]
  const calledOut = [...callout].splice(0, lastWinner[0] + 1);

  const remainingLast = lastBoard?.numbers.filter((num) => !calledOut.includes(num));
  const unmarkedTotal = sum(remainingLast ?? []);

  return unmarkedTotal * lastNumber;
}
