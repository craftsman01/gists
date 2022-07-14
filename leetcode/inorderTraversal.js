/*

https://leetcode.com/problems/binary-tree-inorder-traversal

*/

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
const inorderTraversal = (root) => {
  const result = [];
  // Pick one
  //inorderRecursive(root, result);
  inorderIterative(root, result);
  return result;
};

const inorderRecursive = (root, result) => {
  if (root === null) {
    return;
  }
  inorderRecursive(root.left, result);
  result.push(root.val);
  inorderRecursive(root.right, result);
};

const inorderIterative = (root, result) => {
  if (root === null) {
    return;
  }

  const queue = [];
  let current = root;
  while (queue.length > 0 || current !== null) {
    while (current !== null) {
      queue.push(current);
      current = current.left;
    }
    current = queue.pop();
    result.push(current.val);
    current = current.right;
  }
};
