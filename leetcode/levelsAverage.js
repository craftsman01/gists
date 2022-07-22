// https://leetcode.com/problems/average-of-levels-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
  if (root === null) {
    return [];
  }

  const levels = [];
  let current = root;
  const queue = [current];
  while (queue.length > 0) {
    let levelSum = 0;
    const qSize = queue.length;
    for (let i = 0; i < qSize; i++) {
      current = queue.shift();
      levelSum += current.val;
      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    levels.push(levelSum / qSize);
  }

  return levels;
};
