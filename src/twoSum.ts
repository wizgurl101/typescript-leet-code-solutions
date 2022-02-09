/*

https://leetcode.com/problems/two-sum/discuss/1378064/C%2B%2BJavaPython-HashMap-Two-pointers-Solutions-Clean-and-Concise

Instead of using a two-pointer or a binary search approach, we can utilize a HashTable to search for the required pair. 
We can iterate through the array one number at a time. Let’s say during our iteration we are at number ‘X’, so we need 
to find ‘Y’ such that “X+Y==TargetX + Y == TargetX+Y==Target”. We will do two things here:

    Search for ‘Y’ (which is equivalent to “Target−XTarget - XTarget−X”) in the HashTable. 
    
    If it is there, we have found the required pair.
    Otherwise, insert “X” in the HashTable, so that we can search it for the later numbers.


    so it is Math, solve for Y 

    X + Y = Target 
     so Y = Target - X

 */
export function twoSum(nums: number[], target: number): number[] {
  let hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (hashTable.has(target - currentNum)) {
      return [hashTable.get(target - currentNum), i];
    }

    hashTable.set(currentNum, i);
  }

  return [-1, -1];
}
