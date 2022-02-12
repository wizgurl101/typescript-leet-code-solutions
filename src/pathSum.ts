/* 
https://leetcode.com/problems/path-sum/

https://www.youtube.com/watch?v=LSKQyOz_P8I


*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// recursive solution
// time complexity: O(N) --> number of nodes in the tree
// space complexity: O(N)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf (node that has no children) and its value
  // is equal to the target sum --> this is one path
  if (root.val === targetSum && root.left === null && root.right === null) {
    return true;
  }

  // this is the recursively call to traverse the left and right of the sub-tree
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
