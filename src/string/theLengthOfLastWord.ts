/**
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 */

export const LenghtOfLastWord = (s: string): number => {
  let words = [];
  let current_word: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1 && s[i] !== ' ') {
      current_word.push(s[i]);
    }

    if (s[i] === ' ' || i === s.length - 1) {
      if (current_word.length !== 0) {
        let current_word_string = turnToString(current_word);
        words.push(current_word_string);
        current_word = [];
      }
    } else {
      current_word.push(s[i]);
    }
  }

  const lastWord = words.pop();
  return lastWord ? lastWord.length : 0;
};

const turnToString = function (listOfwords: string[]): string {
  let word = '';
  for (let i = 0; i < listOfwords.length; i++) {
    word = word + listOfwords[i];
  }
  return word;
};
