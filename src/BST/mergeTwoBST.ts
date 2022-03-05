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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) return null;

  let root1Value = root1?.val || 0;
  let root2Value = root2?.val || 0;

  let newRoot = new TreeNode(root1Value + root2Value);

  newRoot.left = mergeTrees(root1?.left || null, root2?.left || null);
  newRoot.right = mergeTrees(root1?.right || null, root2?.right || null);

  return newRoot;
}
