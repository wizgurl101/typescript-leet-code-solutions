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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(root: TreeNode | null): number {
    if (!root) return -1;

    let left = dfs(root.left);
    let right = dfs(root.right);

    result = Math.max(result, 2 + left + right);
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return result;
}
