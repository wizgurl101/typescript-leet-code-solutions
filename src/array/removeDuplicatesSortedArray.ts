function removeDuplicates(nums: number[]): number {
  let leftPointer = 1;

  for (let rightPointer = 1; rightPointer < nums.length; rightPointer++) {
    if (nums[rightPointer] !== nums[rightPointer - 1]) {
      nums[leftPointer] = nums[rightPointer];
      leftPointer++;
    }
  }

  return leftPointer;
}
