/*

https://leetcode.com/problems/3sum-smaller/solution/

*/

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
const threeSumSmaller = (numbers, k) => {
  if (numbers === null) {
    return -1;
  }

  numbers.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < numbers.length - 2; i++) {
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];
      if (sum < k) {
        count += right - left;
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return count;
};
