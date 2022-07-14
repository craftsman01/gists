//https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (s === null || s.length === 0) {
    return 0;
  }

  const charFrequency = {};
  let longestSub = 0;
  let slow = 0;
  for (let fast = 0; fast < s.length; fast++) {
    const current = s[fast];
    if (current in charFrequency) {
      slow = Math.max(charFrequency[current] + 1, slow);
    }
    charFrequency[current] = fast;
    longestSub = Math.max(longestSub, fast - slow + 1);
  }

  return longestSub;
};
