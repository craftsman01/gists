// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  //Pick one
  //const result = memoization(m, n);
  const result = tabulation(m, n);
  return result;
};

const memoization = (m, n, i = 0, j = 0, memo = {}) => {
  if (i === m - 1 && j === n - 1) return 1;
  if (i >= m || j >= n) return 0;

  const key = i + "," + j;
  if (key in memo) return memo[key];
  return (memo[key] =
    memoization(m, n, i, j + 1, memo) + memoization(m, n, i + 1, j, memo));
};

const tabulation = (m, n) => {
  const table = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  table[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === 0) & (j === 0)) continue;
      let top = 0;
      let left = 0;
      if (i - 1 >= 0) {
        top = table[i - 1][j];
      }
      if (j - 1 >= 0) {
        left = table[i][j - 1];
      }
      table[i][j] = top + left;
    }
  }

  return table[m - 1][n - 1];
};
