function anyPermutationPalindrome(str) {
  let chars = str.split("");
  let set = new Set();
  chars.forEach((v) => (set.has(v) ? set.delete(v) : set.add(v)));
  return set.size <= 1;
}

console.log(anyPermutationPalindrome("civic"));
console.log(anyPermutationPalindrome("iivlvcc"));
console.log(anyPermutationPalindrome("civil"));
