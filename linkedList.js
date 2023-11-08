class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let node = new Node(value, this.head);
    this.head = node;
    console.log(this.head);
    console.log(value);
    this.length++;
  }
  prepend(value) {}

  size() {
    console.log(this.length);
  }
  // head() {}
  // tail() {}
  // at(index) {}
  // pop() {}
  // contains(value) {}
  // find(value) {}
  // toString() {}
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

let list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.append("E");
list.append("F");
list.size();
