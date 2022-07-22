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
const maxPathSum = (root) => {
  const tree = new TreeHelper();
  tree.calculateMaxPathSum(root);
  return tree.globalMaxSum;
};

class TreeHelper {
  constructor() {
    this.globalMaxSum = -Infinity;
  }
  calculateMaxPathSum(root) {
    if (!root) {
      return 0;
    }
    const left = Math.max(this.calculateMaxPathSum(root.left), 0);
    const right = Math.max(this.calculateMaxPathSum(root.right), 0);
    const currentMax = left + right + root.val;
    this.globalMaxSum = Math.max(this.globalMaxSum, currentMax);

    return Math.max(left, right) + root.val;
  }
}
