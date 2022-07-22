// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  if (root === null) {
    return [];
  }
  const levels = [];
  let current = root;
  const queue = [current];
  let leftToRight = true;
  while (queue.length > 0) {
    const level = [];
    const qSize = queue.length;

    for (let i = 0; i < qSize; i++) {
      current = queue.shift();
      if (leftToRight) {
        level.push(current.val);
      } else {
        level.unshift(current.val);
      }

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    leftToRight = !leftToRight;
    zig = levels.push(level);
  }

  return levels;
};
