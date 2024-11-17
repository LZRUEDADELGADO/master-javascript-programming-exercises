function computeAverageLengthOfWords(word1, word2) {
    const totalLength = word1.length + word2.length;
    return totalLength / 2;
  }
  let output = computeAverageLengthOfWords('code', 'programs');
  console.log(output); 
  