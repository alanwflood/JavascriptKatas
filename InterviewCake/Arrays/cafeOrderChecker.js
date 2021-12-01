function cafeOrderChecker(takeOut, dineIn, served) {
  let i = 0;
  let j = 0;
  for (let k = 0; k < served.length; k++) {
    if (served[k] === takeOut[i]) i++;
    else if (served[k] === dineIn[j]) j++;
    else return false;
  }
  return true;
}

let takeOut = [1, 3, 5];
let dineIn = [2, 4, 6];
let served = [1, 2, 4, 6, 5, 3];

console.log(cafeOrderChecker(takeOut, dineIn, served));

takeOut = [17, 8, 24];
dineIn = [12, 19, 2];
served = [17, 8, 12, 19, 24, 2];

console.log(cafeOrderChecker(takeOut, dineIn, served));
