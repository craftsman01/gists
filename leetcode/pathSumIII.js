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
 * @return {number}
 */
const pathSum = (root, targetSum) => {
  return new TreeHelper().calcualtePathSum(root, targetSum);
};

class TreeHelper {
  calcualtePathSum(root, targetSum) {
    this.count = 0;
    this.traverseTree(root, {}, targetSum, 0);
    return this.count;
  }

  traverseTree(root, mappings, targetSum, currentSum) {
    if (root === null) {
      return;
    }
    currentSum += root.val;
    if (currentSum === targetSum) {
      this.count += 1;
    }
    const previousSum = currentSum - targetSum;
    if (previousSum in mappings) {
      count += mappings[previousSum];
    }
    mappings[currentSum] = mappings[currentSum] || 0;
    mappings[currentSum] += 1;

    this.traverseTree(root.left, mappings, targetSum, currentSum);
    this.traverseTree(root.right, mappings, targetSum, currentSum);

    mappings[currentSum] = mappings[currentSum] - 1;
  }
}
