//https://leetcode.com/problems/binary-search/solution/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (nums === null || nums.length === 0) {
    -1;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
