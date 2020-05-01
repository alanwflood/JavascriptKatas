function soliution(A) {
  let string = "";
  let array = A.toString().split("");
  let rearpointer = array.length - 1;
  let frontpointer = 0;
  while (true) {
    string += array[frontpointer];
    frontpointer++;
    if (frontpointer == rearpointer) break;
    string += array[rearpointer];
    rearpointer--;
    if (frontpointer == rearpointer) break;
  }
  string += array[frontpointer];
  return Number(string);
}

console.log(soliution(123456));
console.log(soliution(103));
