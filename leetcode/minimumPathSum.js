//https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  // Pick one
  //const result = memoizationEndStart(grid);
  //const result = memoizationStartEnd(grid);
  const result = tabulation(grid);
  return result;
};

const memoizationEndStart = (
  grid,
  i = grid.length - 1,
  j = grid[0].length - 1,
  memo = {}
) => {
  if (i === 0 && j === 0) {
    return grid[i][j];
  }
  if (i < 0 || j < 0) {
    return Number.MAX_SAFE_INTEGER;
  }
  const key = i + "," + j;
  if (key in memo) {
    return memo[key];
  }
  const top = memoization(grid, i - 1, j, memo);
  const left = memoization(grid, i, j - 1, memo);
  memo[key] = grid[i][j] + Math.min(top, left);
  return memo[key];
};

const memoizationStartEnd = (grid, i = 0, j = 0, memo = {}) => {
  const rows = grid.length;
  const columns = grid[0].length;

  if (i === rows - 1 && j === columns - 1) {
    return grid[i][j];
  }
  if (i >= rows || j >= columns) {
    return Number.MAX_SAFE_INTEGER;
  }

  const key = i + "," + j;
  if (key in memo) {
    return memo[key];
  }
  const right = memoization2(grid, i, j + 1, memo);
  const down = memoization2(grid, i + 1, j, memo);
  memo[key] = grid[i][j] + Math.min(right, down);
  return memo[key];
};

const tabulation = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;
  const table = new Array(rows).fill().map(() => new Array(columns).fill(0));
  table[0][0] = grid[0][0];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === 0 && j === 0) continue;
      if (i - 1 < 0) {
        table[i][j] = grid[i][j] + table[i][j - 1];
      } else if (j - 1 < 0) {
        table[i][j] = grid[i][j] + table[i - 1][j];
      } else {
        table[i][j] = grid[i][j] + Math.min(table[i][j - 1], table[i - 1][j]);
      }
    }
  }

  return table[rows - 1][columns - 1];
};
