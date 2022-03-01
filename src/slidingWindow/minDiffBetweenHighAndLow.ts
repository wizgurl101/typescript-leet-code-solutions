// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
// Neetcode: https://www.youtube.com/watch?v=JU5XdBZZtlk

export function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let leftPointer = 0,
    rightPointer = k - 1,
    min = Infinity;

  while (rightPointer < nums.length) {
    let diff = nums[rightPointer] - nums[leftPointer];

    min = Math.min(min, diff);

    leftPointer++;
    rightPointer++;
  }

  return min;
}

export const minimumDifference2 = function (nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  if (k === 1) {
    return 0;
  }

  let n = nums.length;
  let res = Infinity;

  for (let i = 0; i <= n - k; i++) {
    res = Math.min(res, nums[i + k - 1] - nums[i]);
  }

  return res;
};
