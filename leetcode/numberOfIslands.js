// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let numberOfIslands = dfsRecursive(grid);

  return numberOfIslands;
};

/* ============ DFS Recursive approach ============ */
const dfsRecursive = (grid) => {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const columns = grid[0].length;
  let nrOfIslands = 0;
  const visited = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1" && visitIsland(grid, i, j, visited)) {
        nrOfIslands += 1;
      }
    }
  }

  return nrOfIslands;
};

const visitIsland = (grid, i, j, visited) => {
  const key = i + "," + j;
  if (key in visited) {
    return false;
  }

  visited[key] = true;
  const rows = grid.length;
  const columns = grid[0].length;

  if (i + 1 < rows && grid[i + 1][j] === "1") {
    visitIsland(grid, i + 1, j, visited);
  }
  if (i - 1 >= 0 && grid[i - 1][j] === "1") {
    visitIsland(grid, i - 1, j, visited);
  }
  if (j + 1 < columns && grid[i][j + 1] === "1") {
    visitIsland(grid, i, j + 1, visited);
  }
  if (j - 1 >= 0 && grid[i][j - 1] === "1") {
    visitIsland(grid, i, j - 1, visited);
  }

  return true;
};
