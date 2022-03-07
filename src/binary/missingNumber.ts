

/*
  time complexity: O(n)
  space complexity: O(1)

  When n get large, there will be an integer overflow
  However, it has the risk of overflow because the sum of all numbers might be larger than the range of integer type.
 */
function missingNumber1(nums: number[]): number {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i <= nums.length; i++) {
    sum1 += i;
  }

  nums.forEach((num) => (sum2 += num));

  return sum1 - sum2;
}

/*
  XOR Approach

  https://leetcode.com/problems/missing-number/discuss/69786/3-different-ideas%3A-XOR-SUM-Binary-Search.-Java-code

  If anyone needs explanation for XOR solution, a number XOR itself will become 0, any number XOR with 0 will stay unchanged. 
  So if every number from 1...n XOR with itself except the missing number, the result will be the missing number.

  Example:
  1..4 missing 3
  
  1^2  ^4

  ^1^2^3^4

  0^0^3^0 => 3
 */
function missingNumber(nums: number[]): number {
  let missing = nums.length

  for(let i = 0; i < nums.length; i++) {
    missing ^= i;
    missing ^= nums[i]
  }

  return missing
}

