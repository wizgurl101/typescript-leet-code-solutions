/* 
Leetcode 3110: Score of a String

You are given a string s. The score of a string is defined as the sum of the absolute difference 
between the ASCII values of adjacent characters.

Return the score of s.
*/

export function scoreOfAString(s: string): Number {
  let ascii_codes: number[] = [];
  let score = 0;

  s.split("").forEach((char) => {
    ascii_codes.push(char.charCodeAt(0));
  });

  if (ascii_codes.length === 1) {
    return ascii_codes[0];
  }

  for (let i = 0; i < ascii_codes.length; i++) {
    if (i + 1 < ascii_codes.length) {
      let diff = Math.abs(ascii_codes[i] - ascii_codes[i + 1]);
      score += diff;
    }
  }

  return score;
}
