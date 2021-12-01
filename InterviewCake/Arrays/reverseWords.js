let s = ["b", "a", "d", " ", "a", "t", " ", "c", "o", "d", "i", "n", "g"];
console.log(s.join(""));
function reverseWordsInPlace() {
  reverseInPlace(0, s.length - 1);

  let i = 0;
  for (let k = 1; k < s.length + 1; k++) {
    if (s[k] === " " || k === s.length) {
      reverseInPlace(i, k - 1);
      i = k + 1;
    }
  }
}

function reverseInPlace(start, end) {
  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
}
reverseWordsInPlace();
console.log(s.join(""));
