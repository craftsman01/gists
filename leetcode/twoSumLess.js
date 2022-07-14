/*

https://leetcode.com/problems/two-sum-less-than-k/solution/

*/

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
const twoSumLessThanK = (numbers, k) => {
  if (numbers === null) {
    return -1;
  }
  numbers.sort((a, b) => a - b);
  let left = 0;
  let right = numbers.length - 1;
  while (numbers[right] > k) {
    right -= 1;
  }
  let maxSum = -1;
  let currentSum = -1;
  while (left < right) {
    currentSum = numbers[left] + numbers[right];
    if (currentSum < k) {
      maxSum = Math.max(currentSum, maxSum);
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxSum;
};
