function OneAway(string, test) {
  const map = new Map();

  for (let i = 0; i < string.length; i++) {
    map.set(string[i], (map.get(string[i]) || 0) + 1);
  }

  for (let i = 0; i < test.length; i++) {
    const value = map.get(test[i]);
    map.set(test[i], value ? value - 1 : 0);
  }

  return Array.from(map.values()).filter((val) => val == 1).length == 1;
}

console.log(OneAway("pale", "ple"));
console.log(OneAway("pales", "pale"));
console.log(OneAway("pale", "bale"));
console.log(OneAway("pale", "bake"));
