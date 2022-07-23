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
const pathSum = (root, targetSum, paths = [], currentPath = []) => {
  if (root === null) {
    return paths;
  }
  currentPath.push(root.val);
  if (root.val === targetSum && root.left === null && root.right === null) {
    paths.push(currentPath.slice());
  }
  targetSum -= root.val;
  pathSum(root.left, targetSum, paths, currentPath);
  pathSum(root.right, targetSum, paths, currentPath);

  currentPath.pop();
  return paths;
};
