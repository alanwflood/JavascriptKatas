/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// JavaScript source code
var addTwoNumbers = function (l1, l2) {
  let n1 = l1;
  let n2 = l2;
  let result = new ListNode(0);
  let current = result;
  while (n1 || n2) {
    if (n1) {
      current.val += parseInt(n1.val);
      n1 = n1.next;
    }
    if (n2) {
      current.val += parseInt(n2.val);
      n2 = n2.next;
    }

    if (n1 || n2 || current.val > 9) {
      current.next = new ListNode(0);
    }

    if (current.val > 9) {
      current.next.val = 1;
      current.val -= 10;
    }
    current = current.next;
  }
  return result;
};

class ListNode {
  constructor() {
    this.val = val;
    this.next = null;
  }
}

function toLinkList(v) {
  let d = [];
  for (let i = 0; i < v.length; i++) {
    d.push(new ListNode(parseInt(v[i])));
  }
  console.log("toLinkList", d);
  for (let i = 0; i < d.length - 1; i++) {
    d[i].next = d[i + 1];
  }
  return d[0];
}
