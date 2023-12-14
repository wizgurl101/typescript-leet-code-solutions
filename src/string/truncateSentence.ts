export const truncateSentence = (s: string, k: number): string => {
  if (s.length === 0) return "";

  const words = s.split(" ");

  if (words.length === k) return s;

  let sentence = "";

  for (let i = 0; i < k; i++) {
    if (i === k - 1) {
      sentence += words[i];
    } else {
      sentence += words[i] + " ";
    }
  }

  return sentence;
};
