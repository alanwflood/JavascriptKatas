/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let numOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      numOfIslands += dfs(grid, i, j);
    }
  }
  return numOfIslands;
};

function dfs(grid, i, j) {
  if (
    i < 0 ||
    i > grid.length ||
    j < 0 ||
    j > grid.length ||
    grid[i][j] === "0"
  ) {
    return 0;
  }

  grid[i][j] = "0";
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  return 1;
}

// Iterate over y axis
// -> Iterate for each y axis the x axis
// --> Convert land/water to create array of land points [x,y] coords;
// Iterate over land points;
// check distance from each land points;

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
