/**
 *  Problem: Given an integer columnNumber, return its corresponding column title
 *  as it appears in an Excel sheet.
 *  https://leetcode.com/problems/excel-sheet-column-title/
 *  https://www.tutorialcup.com/leetcode-solutions/excel-sheet-column-title-leetcode-solution.htm
 *
 *  Constraints
 *  1 <= columnNumber <= 2^31 - 1
 *
 *  think of modulus and multiple of 26 (because there is 26 letters)
 *
 * 1. Create an empty string for storing the characters.
 * 2. Run a loop while n is positive.
 *     - Subtract 1 from n.
 *     - Get current character by doing modulo of  n by 26.
 *     - Divide n by 26.
 * 3. Now reverse the result string because we have found characters from right to left.
 * 4. Return the reversed string.
 *
 */

function getChar(num: number) {
  let start = "A".charCodeAt(0);
  return String.fromCharCode(start + --num);
}

function convertToTitle(columnNumber: number): string {
  let result = "";
  let currentCharacterNumber = 0;

  while (columnNumber > 0) {
    currentCharacterNumber = columnNumber % 26 === 0 ? 26 : columnNumber % 26;

    result = getChar(currentCharacterNumber) + result;

    columnNumber = (columnNumber - currentCharacterNumber) / 26;
  }

  return result;
}

export default convertToTitle;
