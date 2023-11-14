class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.length++;
  }

  prepend(value) {
    let current = this.head; //a
    // console.log(current);
    if (this.head !== null) {
      //execute
      this.head = new Node(value); //a = 3
    }
    this.head.next = current; //a = head.next
    this.length++;
  }

  size() {
    console.log(this.length);
  }

  getHead() {
    console.log(this.head);
  }

  getTail() {
    let current = this.head;
    if (this.head == null) {
      return (this.head = null);
    }
    while (current.next) {
      current = current.next;
    }
    console.log(current);
  }

  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

// contains(value) {}
// find(value) {}
// toString() {}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.append("E");
list.append("F");

// list.prepend(3);
// list.prepend(2);
// list.prepend(1);

// list.append("tail");
// list.prepend("head");

// list.prepend("A");
// list.prepend("B");
// list.prepend("C");
// list.prepend("D");
// list.prepend("E");
// list.prepend("F");

// console.log("--------GET_HEAD-----------------");
// list.getHead();
// // list.getTail();
// console.log("--------SIZE-----------------");
// list.size();
// console.log("--------POP-----------------");
// list.pop();
// console.log("--------SIZE-----------------");
// list.size();
// console.log("--------GET_TAIL-----------------");
// list.getTail();
console.log("--------LISTA-----------------");
console.log(list);
