// https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
const maxPathSum = function (root) {
  return new TreeHelper().findMaxPathSum(root);
};

class TreeHelper {
  findMaxPathSum(root) {
    this.globalMaxSum = -Infinity;
    this.calculateMaxPathSum(root);
    return this.globalMaxSum;
  }
  calculateMaxPathSum(root) {
    if (root === null) {
      return 0;
    }

    const left = Math.max(this.calculateMaxPathSum(root.left), 0);
    const right = Math.max(this.calculateMaxPathSum(root.right), 0);
    const currentMax = left + right + root.val;

    this.globalMaxSum = Math.max(currentMax, this.globalMaxSum);

    return Math.max(left, right) + root.val;
  }
}
