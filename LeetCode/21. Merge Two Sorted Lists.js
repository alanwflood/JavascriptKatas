// Original answer
var mergeTwoLists = function (l1, l2) {
  if (!a || !b) {
    return new ListNode();
  }
  let a = l1;
  let b = l2;
  let result = new ListNode(0);
  let current = result;
  while (a !== null || b !== null) {
    if (a === null) {
      current.val = b.val;
      b = b.next;
    } else if (b === null) {
      current.val = a.val;
      a = a.next;
    } else if (a.val <= b.val) {
      current.val = a.val;
      a = a.next;
    } else {
      current.val = b.val;
      b = b.next;
    }
    if (a || b) {
      current.next = new ListNode(0);
    }
    current = current.next;
  }
  return result;
};

// Faster
function fasterMergeTwoLists(l1, l2){
  const result = new ListNode();
    
  let current = result;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 === null ? l2 : l1;
  return result;
};
}

class ListNode {
  constructor() {
    this.val = value;
    this.next = null;
  }
}

function arrayToLinkedList(array) {
  let head = new ListNode(array[0]);
  for (let i = 1; i < array.length; i++) {
    head.next = new ListNode(array[i]);
    head = head.next;
  }
  return head;
}

console.log(mergeTwoLists([1, 2, 3], [1, 2, 6]));
