function mostWordsFound(sentences: string[]): number {
  let max = 0;

  sentences.forEach((sentence) => {
    const temp = sentence.split(" ");
    const numOfWords = temp.length;

    if (numOfWords > max) {
      max = numOfWords;
    }
  });

  return max;
}
