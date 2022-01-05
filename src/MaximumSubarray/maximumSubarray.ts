/**
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Solution References:
Dynamic Programming question
https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

https://www.interviewbit.com/blog/maximum-subarray-sum/

Kadane's Algorithm
Follow the below steps to solve the problem.

    Define two-variable currSum which stores maximum sum ending here and maxSum which stores maximum sum so far.
    Initialize currSum with 0 and maxSum with INT_MIN.
    Now, iterate over the array and add the value of the current element to currSum and check
        If currSum is greater than maxSum, update maxSum equals to currSum.
        If currSum is less than zero, make currSum equal to zero.
    Finally, print the value of maxSum.
*/

export function maxSubArray(nums: number[]): number {
  return 1;
}
