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
 * @param {number} targetSum
 * @return {number[][]}
 */
const hasPathSum = (root, targetSum) => {
  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null && root.val === targetSum) {
    return true;
  }
  targetSum -= root.val;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
