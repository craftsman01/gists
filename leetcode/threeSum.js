/*

https://leetcode.com/problems/3sum/

*/

/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const threeSum = (numbers) => {
  if (numbers === null) {
    return [];
  }
  numbers.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];
      if (sum === 0) {
        triplets.push([numbers[i], numbers[left], numbers[right]]);
        left += 1;
        right -= 1;
        while (left < right && numbers[left] === numbers[left - 1]) {
          left += 1;
        }
        while (right > left && numbers[right] === numbers[right + 1]) {
          right -= 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return triplets;
};
