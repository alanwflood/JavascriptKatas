// Given a word, dogs return the singular of that word

class Node {
  constructor(char) {
    this.char = char;
    this.children = {};
    this.output = null;
  }

  getOutput(str) {
    if (str.length === 0) {
      return this.output;
    } else {
      const child = this.children[str[0]];
      return child.getOutput(str.substring(1));
    }
  }

  setNode(key, value) {
    if (key.length === 0) {
      this.output = value;
    } else {
      const nextChar = key[0];
      if (!this.children.hasOwnProperty(nextChar)) {
        this.children[nextChar] = new Node(nextChar);
      }
      const child = this.children[nextChar];
      child.setNode(key.substring(1), value);
    }
  }
}

let node = new Node("d");
console.log(node.setNode("dogs", "dog"));
console.log(node);
console.log(node.getOutput("dogs"));
