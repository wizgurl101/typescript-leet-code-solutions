// https://leetcode.com/problems/relative-ranks/

const RATING = ["Gold Medal", "Silver Medal", "Bronze Medal"];

/*

Basically we can create a new array in the ascending order which can be used to create a mapping for the original nums array.

Once we have the mapping, we can replace the numbers in the original array with relatives rank and return the result.

O(n) Space complexity
O(n logn ) + O(n) Time complexity

 */
export function findRelativeRanks(score: number[]): string[] {
  // score.slice(0) starts at index 0 and because there is no
  // ending index, it make a new copy of score array then
  // sort that new array in ascending order
  let sortedScore = score.slice(0).sort((a, b) => {
    return b - a;
  });

  // create a Map/hashtable that store the index and the score
  const sortedScoreMap = new Map();

  sortedScore.forEach((score, index) => {
    sortedScoreMap.set(score, `${++index}`);
  });

  return score.map((score, index) => {
    switch (sortedScoreMap.get(score)) {
      case "1":
        return "Gold Medal";
      case "2":
        return "Silver Medal";
      case "3":
        return "Bronze Medal";
      default:
        return sortedScoreMap.get(score);
    }
  });
}

export function findRelativeRanksSolution2(score: number[]): string[] {
  return [""];
}
