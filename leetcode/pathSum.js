// https://leetcode.com/problems/path-sum-ii/
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
const pathSum = (root, targetSum) => {
  const paths = [];
  traverseTree(root, targetSum, paths);
  return paths;
};

const traverseTree = (root, targetSum, paths, currentPath = []) => {
  if (root === null) {
    return;
  }
  currentPath.push(root.val);
  if (root.val === targetSum && root.left === null && root.right === null) {
    paths.push(currentPath.slice());
  }
  targetSum -= root.val;
  traverseTree(root.left, targetSum, paths, currentPath);
  traverseTree(root.right, targetSum, paths, currentPath);
  currentPath.pop();
};
