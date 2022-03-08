const longestCommonPrefix = (strs: string): string => {
  let prefix = "";
  let firstword = strs[0];

  for (let i = 0; i < firstword.length; i++) {
    for (const word of strs) {
      if (i === word.length || word[i] !== firstword[i]) {
        return prefix;
      }
    }

    prefix += firstword[i];
  }

  return prefix;
};
