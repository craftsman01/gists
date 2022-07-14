/*

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Can be solved using a Hash Table, but because the input array is already sorted,
we can also solve it using Two Pointers which consumes less space

*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  if (numbers === null) {
    return [-1, -1];
  }
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
};
