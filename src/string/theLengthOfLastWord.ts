export const LenghtOfLastWord = (s: string): number => {
  // list of all the words in the string
  let words = [];

  // loop through the array
  for (let i = 0; i < s.length; i++) {
    // an array to temp hold the current word
    let current_word: string[] = [];

    // check if current character is an empty string
    if (s[i] === ' ') {
      // if it is
      // check that current word array is not empty
      if (current_word.length !== 0) {
        // if it isn't empty
        // add to list of all words
        let current_word_string = turnToString(current_word);
        words.push(current_word_string);
        current_word = [];
      }
    } else {
      // check if current character is a letter
      // if it is, then add that letter to the current word array
      current_word.push(s[i]);
    }
  }

  const lastWord = words[words.length - 1];
  return lastWord.length;
};

const turnToString = function (listOfwords: string[]): string {
  let word = '';
  for (let i = 0; i < listOfwords.length; i++) {
    word = word + listOfwords[i];
  }
  return word;
};
