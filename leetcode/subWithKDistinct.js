// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
  if (s === null || s.length === 0) {
    return 0;
  }

  const frequencyChar = {};
  let longestSub = 0;
  let slow = 0;
  for (let fast = 0; fast < s.length; fast++) {
    const current = s[fast];
    if (!(current in frequencyChar)) {
      frequencyChar[current] = 0;
    }
    frequencyChar[current] += 1;

    while (Object.keys(frequencyChar).length > k) {
      const toRemove = s[slow];
      frequencyChar[toRemove] -= 1;
      if (frequencyChar[toRemove] === 0) {
        delete frequencyChar[toRemove];
      }
      slow += 1;
    }
    longestSub = Math.max(longestSub, fast - slow + 1);
  }

  return longestSub;
};
