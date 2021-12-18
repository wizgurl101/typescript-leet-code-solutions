/**
 * https://www.educative.io/edpresso/the-valid-parentheses-problem
 */

interface Bracket {
  "(": string;
  "[": string;
  "{": string;
}

export const validParenthese = (input: string): boolean => {
  let stack: String[] = [];

  for (let i = 0; i < input.length; i++) {
    let currentBracket = input[i];

    let brackets: Bracket = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    // check if it is a opening bracket
    if (
      currentBracket === "(" ||
      currentBracket === "[" ||
      currentBracket === "{"
    ) {
      stack.push(currentBracket);
    }

    // check if it is a closing bracket
    if (
      currentBracket === ")" ||
      currentBracket === "]" ||
      currentBracket === "}"
    ) {
      if (!stack.length) {
        return false;
      }

      let stackBracket = stack.pop();
      let stackBracketMatchingCloseBracket =
      
        brackets[`${stackBracket}` as keyof Bracket];

      if (currentBracket !== stackBracketMatchingCloseBracket) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};
