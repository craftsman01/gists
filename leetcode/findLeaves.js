// https://leetcode.com/problems/find-leaves-of-binary-tree/solution/

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
const findLeaves = function (root) {
  if (root === null) {
    return [];
  }

  const leaves = [];

  collectLeaves(root, leaves);
  return leaves;
};

const collectLeaves = (root, leaves) => {
  if (root === null) {
    return 0;
  }

  const left = collectLeaves(root.left, leaves);
  const right = collectLeaves(root.right, leaves);

  const currentHeight = Math.max(left, right);
  if (leaves.length === currentHeight) {
    leaves.push([]);
  }

  leaves[currentHeight].push(root.val);
  return currentHeight + 1;
};
