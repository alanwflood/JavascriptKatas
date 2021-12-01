class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k, head) {
  let runner = head;
  let forwardRunner = head;

  do {
    forwardRunner = forwardRunner.next;
  } while (--k);

  while (forwardRunner) {
    runner = runner.next;
    forwardRunner = forwardRunner.next;
  }

  // Return the kth to last node in the linked list

  return runner;
}

// Tests

let desc = "first to last node";
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
let actual = kthToLastNode(1, nodes[0]);
let expected = nodes[3];
assertEquals(actual, expected, desc);

desc = "second to last node";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(2, nodes[0]);
expected = nodes[2];
assertEquals(actual, expected, desc);

desc = "first node";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(4, nodes[0]);
expected = nodes[0];
assertEquals(actual, expected, desc);

desc = "k greater than linked list length";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const fifthFromLast = () => kthToLastNode(5, nodes[0]);
assertThrows(fifthFromLast, desc);

desc = "k is zero";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const zeroFromLast = () => kthToLastNode(0, nodes[0]);
assertThrows(zeroFromLast, desc);

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
