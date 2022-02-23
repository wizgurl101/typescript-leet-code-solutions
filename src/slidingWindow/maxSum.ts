/**
 * Colt Steele Sliding Window Pattern in Section 5
 * @param nums
 * @param n the number of consecutive elements in the array
 * @returns the maximum sum of n
 */
export function maxSubarraySum(nums: number[], n: number): number {
  if (!nums.length || n > nums.length) return 0;

  let maxSum = 0,
    tempSum = 0;

  // get the sum of the "first window"
  for (let i = 0; i < n; i++) {
    maxSum += nums[i];
  }

  // now store that starting sum in tempSum
  tempSum = maxSum;

  // now start the loop at index n (after the first window)
  for (let i = n; i < nums.length; i++) {
    // subtracting the value of the pointer at the start of the window (i-n)
    // add the value of the pointer at the end of the winow (i)
    tempSum = tempSum - nums[i - n] + nums[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return 0;
}
