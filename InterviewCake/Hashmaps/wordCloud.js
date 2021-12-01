function wordCloud(str) {
  let wordMap = new Map();
  let words = str
    .split(" ")
    .forEach((word) =>
      wordMap.set(
        word[i].toLowerCase(),
        (wordMap.get(word[i].toLowerCase()) || 0) + 1
      )
    );
  return wordMap;
}

console.log(
  wordCloud(
    "After beating the eggs, Dana read the next step:, Add milk and eggs, then add flour and sugar"
  )
);
