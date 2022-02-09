/**
 * https://leetcode.com/problems/roman-to-integer/

https://leetcode.com/problems/roman-to-integer/discuss/1131238/Easy-to-understand-w-explanation-or-12-lines-or-Faster-than-98

Approach:

    Scan the given roman numeral string from left to right character by character and add the corresponding integer value to ans.

    Record previous added value in prev so that it can be compared with another value in the next iteration. 
    If curr value is greater than prev, it means we have numerals like 'IV', 'IX', 'XL', 'CD', 'CM' etc. 
    In that case, subtract previously added value from ans and add the difference between curr and prev.

    E.g. If we had 'XL' then we'd subtract 'X' i.e. 10 from ans and add 40 ('L' i.e. 50 - 'X' i.e. 10 = 40)
 */

export function romanToInt(s: string): number {
  let map: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let prevValue = -1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let currValue = map[s[i]];

    if (prevValue !== -1 && currValue > prevValue) {
      result -= prevValue;
      result += currValue - prevValue;
    } else {
      result += currValue;
    }

    prevValue = currValue;
  }

  return result;
}
