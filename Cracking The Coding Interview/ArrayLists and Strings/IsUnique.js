function isUnique(string) {
  const map = new Map();
  const chars = string.split("");
  for (let i = 0; i < chars.length; i++) {
    map.set(chars[i], (map.get(chars[i]) || 0) + 1);
  }
  return Array.from(map).every(([_key, value]) => value == 1);
}

console.log("racecar:", isUnique("racecar"));
console.log("abcdefg:", isUnique("abcdefg"));
console.log("black:", isUnique("black"));
console.log("white:", isUnique("white"));
