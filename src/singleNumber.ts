// https://leetcode.com/problems/single-number/
// https://leetcode.com/problems/single-number/discuss/1771771/Think-it-through-oror-Time%3A-O(n)-Space%3A-O(1)-oror-Python-Explained

export function singleNumber(nums: number[]): number {
    let map = new Map()

    nums.forEach((num) => {
        if(map.has(num)) {
            map.delete(num)
        } else {
            map.set(num, num)
        }
    })

    return parseInt(map.entries().next().value)
};

// export function singleNumber2(nums: number[]): number {
//     let obj = {}
    
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]]) {
//             delete obj[nums[i]];
//         } else {
//             obj[nums[i]] = 1;
//         }
//     }

//     return Object.keys(obj)[0];
// };

// export function singleNumber3(nums: number[]): number {
// return nums.reduce((prev, curr) => prev ^ curr)

// };