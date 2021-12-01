function highScores(scores, capacity) {
  let count = new Array(capacity).fill(0);
  for (let i = 0; i < scores.length; i++) count[scores[i]]++;

  const sortedArray = [];
  for (let i = capacity - 1; i >= 0; i--) {
    while (count[i] > 0) {
      sortedArray.push(i);
      count[i]--;
    }
  }
  console.log(sortedArray);
  return scores;
}

highScores([1, 2, 10, 8, 3], 10);
