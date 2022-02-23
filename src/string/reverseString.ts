export const reverseString1 = (s: string): string => {
  return s.split("").reverse().join("");
};

export const reverseString2 = (s: string): string => {
  let reverse = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }

  return reverse;
};

export const reverseString3 = (s: string): string => {
  let reverse = "";

  for (let char of s) {
    reverse = char + reverse;
  }

  return reverse;
};

export const reverseString4 = (s: string): string => {
  return s
    .split("")
    .reduce((reversedString, character) => character + reversedString, "");
};
