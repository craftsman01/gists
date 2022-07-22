// https://leetcode.com/problems/binary-tree-vertical-order-traversal/solution/

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
const verticalOrder = (root) => {
  if (root === null) {
    return [];
  }
  const nodesMapping = {};
  let minColumn = Number.MAX_SAFE_INTEGER;
  let maxColumn = Number.MIN_SAFE_INTEGER;
  let current = new Node(root.val, root.left, root.right, 0);
  const queue = [current];

  while (queue.length > 0) {
    const qSize = queue.length;
    for (let i = 0; i < qSize; i++) {
      current = queue.shift();
      const currentColumn = current.column;
      minColumn = Math.min(minColumn, currentColumn);
      maxColumn = Math.max(maxColumn, currentColumn);
      if (!(currentColumn in nodesMapping)) {
        nodesMapping[currentColumn] = [];
      }
      nodesMapping[currentColumn].push(current.val);
      if (current.left !== null) {
        const leftChild = current.left;
        queue.push(
          new Node(
            leftChild.val,
            leftChild.left,
            leftChild.right,
            currentColumn - 1
          )
        );
      }
      if (current.right !== null) {
        const rightChild = current.right;
        queue.push(
          new Node(
            rightChild.val,
            rightChild.left,
            rightChild.right,
            currentColumn + 1
          )
        );
      }
    }
  }

  const result = [];
  for (let i = minColumn; i <= maxColumn; i++) {
    result.push(nodesMapping[i]);
  }
  return result;
};

class Node {
  constructor(val, left, right, column) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.column = column;
  }
}
