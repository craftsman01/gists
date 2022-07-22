//https://leetcode.com/problems/sum-root-to-leaf-numbers/

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
 * @return {number}
 */
const sumNumbers = (root, pathSum = 0) => {
  if (root === null) {
    return 0;
  }
  pathSum = pathSum * 10 + root.val;
  if (root.left === null && root.right === null) {
    return pathSum;
  }

  return pathSum(root.left, sum) + pathSum(root.right, sum);
};
