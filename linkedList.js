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
    let current = this.head;
    if (this.head !== null) {
      this.head = new Node(value);
    }
    this.head.next = current;
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;
    if (this.head == null) {
      return (this.head = null);
    }
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
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

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();
list.append("A"); //  A
list.append("B"); //  A, B
list.append("C"); //  A, B, C

list.prepend(3); // 3, A, B, C
list.prepend(2); // 2, 3, A, B, C
list.prepend(1); // 1, 2, 3, A, B, C

// console.log("------getHead------");
// console.log(list.getHead()); // 1

// console.log("------getTail------");
// console.log(list.getTail()); // C

// console.log("------size------");
// console.log(list.size()); // 6

// console.log("------at(index)------");
// console.log(list.at(0)); // 1
// console.log(list.at(5)); // C

// console.log("------pop------");
// console.log(list.pop()); // 1, 2, 3, A, B, C >>> 1, 2, 3, A, B

// console.log("------contains------");
// console.log(list.contains(1)); // true
// console.log(list.contains(2)); // true
// console.log(list.contains("C")); // false
// console.log(list.contains("asd")); // false

// console.log("------list------");
// console.log(list);

console.log(list.find(1));
console.log(list.find("A"));
console.log(list.find("B"));
console.log(list.find(3));
