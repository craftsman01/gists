// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  // Pick one
  //const result = tabulation(cost);
  //const result = memoization(cost);
  const result = constantSpace(cost);
  return result;
};

const memoization = (cost, i = cost.length, memo = {}) => {
  if (i === 0) return 0;
  if (i === 1) return 0;
  if (i in memo) return memo[i];

  const downOne = cost[i - 1] + memoization(cost, i - 1, memo);
  const downTwo = cost[i - 2] + memoization(cost, i - 2, memo);

  memo[i] = Math.min(downOne, downTwo);

  return memo[i];
};

const tabulation = (cost) => {
  const staris = cost.length;
  const table = new Array(staris + 1);
  table[0] = 0;
  table[1] = 0;
  for (let i = 2; i < table.length; i++) {
    table[i] = Math.min(table[i - 1] + cost[i - 1], table[i - 2] + cost[i - 2]);
  }

  return table[staris];
};

const constantSpace = (cost) => {
  let downOne = 0;
  let downTwo = 0;
  for (let i = 2; i < cost.length + 1; i++) {
    let temp = downOne;
    downOne = Math.min(cost[i - 1] + downOne, cost[i - 2] + downTwo);
    downTwo = temp;
  }
  return downOne;
};
