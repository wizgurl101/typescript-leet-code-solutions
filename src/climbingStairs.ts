/*

https://leetcode.com/problems/climbing-stairs/

https://www.youtube.com/watch?v=Y0lT9Fck7qI

https://www.youtube.com/watch?v=5o-kdjv7FD0
 */

function climbStairs(n: number): number {
  let resultOne = 1;
  let resultTwo = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = resultOne;

    resultOne = resultOne + resultTwo;

    resultTwo = temp;
  }

  return resultOne;
}
