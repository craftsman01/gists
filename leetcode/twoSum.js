/*

https://leetcode.com/problems/two-sum/

We can't use a two pointers approach because we need to return the indices and not the elements,
Two pointers require sorting the array first.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  if (nums === null) {
    return [-1, -1];
  }

  const memo = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current in memo) {
      return [memo[current], i];
    }
    memo[target - current] = i;
  }

  return [-1, -1];
};
