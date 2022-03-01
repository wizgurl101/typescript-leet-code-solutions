// https://leetcode.com/problems/sorting-the-sentence/

export function sortSentence(s: string): string {
  const temp = s.split(" ");

  let sentence = "";
  let map = new Map();

  temp.forEach((word) => {
    let position = word[word.length - 1];
    let w = word.substring(0, word.length - 1);
    map.set(position, w);
  });

  sentence += `${map.get(`${1}`)}`;

  for (let i = 2; i <= temp.length; i++) {
    sentence += ` ${map.get(`${i}`)}`;
  }

  return sentence;
}
