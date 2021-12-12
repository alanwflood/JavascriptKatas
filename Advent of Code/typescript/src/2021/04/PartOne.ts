import { splitBlankLine } from '../../lib';

function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

function mapRawBoardToRows(board: string): number[][] {
   return board
     .split('\n')
     .map(line => line
          .split(' ')
          .filter(Boolean)
          .map(num => parseInt(num.trim()), 10)
     )
}

function mapCallout(callout: string): number[] {
  return callout.split(',').map(string => parseInt(string, 10));
}

function rotate2dArray<T>(array: T[][]): T[][] {
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}

function mapInputToBingo(input: string) {
  const [callout, ...rawBingoBoards] = splitBlankLine(input);
  const boardRows = rawBingoBoards.map(mapRawBoardToRows);
  const boardColumns = boardRows.map(rotate2dArray)
  return {
    callout: mapCallout(callout),
    boardRows,
    boardColumns
  };
}

export function runner(input: string) {
  const { callout, boardRows, boardColumns } = mapInputToBingo(input);
  const combinations = [...boardRows, ...boardColumns].flat();
  for (let i = 0; i < callout.length; i++) {
    combinations.map(line => {
      const index = line.indexOf(callout[i]);
      if (index > -1) line[index] = 0;
    })

    if (i > 4) {
      let winningIndex = combinations
        .findIndex(line => line.join('') === '00000');

      if (winningIndex > -1) {
        const boardStartIndex = Math.floor(winningIndex/5)*5;
        const winningBoard = combinations.slice(boardStartIndex, boardStartIndex + 5);
        const winningSum = sum(winningBoard.map(line => sum(line)));
        return winningSum * callout[i];
      }
    }
  }
  return 0;
}
