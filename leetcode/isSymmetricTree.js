// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} r1
 * @return {boolean}
 */
const isSymmetric = (r1, r2 = r1) => {
  if (r1 === null) {
    return true;
  }
  if (!areEqual(r1, r2)) {
    return false;
  }
  return isSymmetric(r1.left, r2.right) && isSymmetric(r1.right, r2.left);
};

const areEqual = (nodeA, nodeB) => {
  if (nodeA === null && nodeB === null) {
    return true;
  }
  if (nodeA === null || nodeB === null) {
    return false;
  }

  return nodeA.val === nodeB.val;
};
