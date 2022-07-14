/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  if (root === null) {
    return null;
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, q, p);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, q, p);
  } else {
    return root;
  }
};
