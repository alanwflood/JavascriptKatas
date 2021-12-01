let myList = [3, 4, 6, 10, 11, 15];
let alicesList = [1, 5, 8, 12, 14, 19, 20, 43];

function mergeSortedListsSimple(listA, listB) {
  return [...listA, ...listB].sort((a, b) => a - b);
}

function mergeSortedLists(listA, listB) {
  let list = [];
  while (listA.length !== 0 && listB.length !== 0) {
    if (listA[0] < listB[0]) {
      list.push(listA.shift());
    } else {
      list.push(listB.shift());
    }
  }
  return list.concat(listA.length !== 0 ? listA : listB);
}
