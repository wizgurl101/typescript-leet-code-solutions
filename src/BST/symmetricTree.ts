/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function check_symmetric(
  subtree_1: TreeNode | null,
  subtree_2: TreeNode | null
): boolean {
  if (!subtree_1 && !subtree_2) return true;

  if (subtree_1 && subtree_2) {
    return (
      subtree_1.val === subtree_2.val &&
      check_symmetric(subtree_1.left, subtree_2.right) &&
      check_symmetric(subtree_1.right, subtree_2.left)
    );
  }

  return false;
}

function isSymmetric(root: TreeNode | null): boolean {
  return check_symmetric(root, root);
}
