/*

https://leetcode.com/problems/3sum-closest/

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (numbers, target) => {
  numbers.sort((a, b) => a - b);
  let closestDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      const currentDiff = target - numbers[i] - numbers[left] - numbers[right];
      if (closestDiff === 0) {
        return target;
      }
      if (
        Math.abs(currentDiff) < Math.abs(closestDiff) ||
        (Math.abs(currentDiff) === Math.abs(closestDiff) &&
          currentDiff > closestDiff)
      ) {
        closestDiff = currentDiff;
      }

      if (currentDiff > 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return target - closestDiff;
};
