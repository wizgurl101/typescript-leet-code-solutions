/*
https://leetcode.com/problems/binary-search/

Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index. 
Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

export function search(nums: number[], target: number): number {
  let leftPointer = 0,
    rightPointer = nums.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  while (nums[middlePointer] !== target && leftPointer <= rightPointer) {
    if (target < nums[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }

    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  return nums[middlePointer] === target ? middlePointer : -1;
}
