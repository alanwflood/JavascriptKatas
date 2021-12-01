/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (grid.length < 1) {
    return -1;
  }
  const gridWidth = grid.length;
  const gridHeight = grid[0].length;
  let time = 0;

  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      time += dfs(grid, j, i, false);
    }
  }
  return time;
};

function bfs(grid, i, j, rot = true) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] == 0
  ) {
    return 0;
  }

  if (grid[i][j] == 2) {
    console.log("Rotted @ ", grid, i, j);
    grid[i][j] = 0;
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
    return 1;
  }
  if (grid[i][j] == 1) {
    if (rot) {
      grid[i][j] = 2;
    }
  }
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
