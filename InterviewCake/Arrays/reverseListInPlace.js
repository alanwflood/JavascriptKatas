var list = ["a", "b", "c", "d", "e", "f", "g"];
console.log(list);
function reverseListInPlace() {
  let i = 0;
  let j = list.length - 1;
  while (i < j) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
    i++;
    j--;
  }
}
reverseListInPlace();
console.log(list);
