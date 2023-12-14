// Neetcode optimal solution https://www.youtube.com/watch?v=KLlXCFG5TnA&t=128s

// hashmap solution
// better time complexity --> O(n) time
// worse on space complexity
export const twoSum = (nums: number[], target: number): number[] => {
  let map = new Map();
  let sum_indexes: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let diff = target - number;

    if (map.has(diff)) {
      sum_indexes.push(i);
      const value = map.get(diff);
      sum_indexes.push(value);
    } else {
      map.set(number, i);
    }
  }

  return sum_indexes;
};

// poor time complexity --> O(n^2) times
export const twoSum_solution1 = (nums: number[], target: number): number[] => {
  let sum_indexes: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k <= nums.length; k++) {
      if (k !== nums.length + 1) {
        let sum = nums[i] + nums[k];
        if (sum === target) {
          sum_indexes.push(i);
          sum_indexes.push(k);
          break;
        }
      }
    }
  }

  return sum_indexes;
};
