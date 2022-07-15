// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  //Pick One
  //const result = memoization(n);
  const result = tabulation(n);

  return result;
};

const memoization = (n, memo = {}) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (n in memo) return memo[n];

  return (memo[n] = memoization(n - 1, memo) + memoization(n - 2, memo));
};

const tabulation = (n) => {
  const table = new Array(n + 1);
  table[0] = 1;
  table[1] = 1;
  table[2] = 2;
  for (let i = 3; i < table.length; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
};
