// https://leetcode.com/problems/find-the-duplicate-number/
// Neetcode: https://www.youtube.com/watch?v=wjYnzkAhcNk

function findDuplicate(nums: number[]): number {
    let slow = 0, slow2 = 0, fast = 0;

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]

        if(slow === fast) break
    }


    while (true) {
        slow = nums[slow]
        slow2 = nums[slow2]

        if(slow === slow2) return slow
    }
};