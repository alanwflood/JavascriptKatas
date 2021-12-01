var numJewelsInStones = function (J, S) {
  const map = new Map();
  J.split("").map((jewel) => map.set(jewel, 0));
  S.split("").map((stone) => {
    if (map.has(stone)) map.set(stone, map.get(stone) + 1);
  });
  return Array.from(map.values()).reduce((sum, num) => (sum += num), 0);
};
