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
    let current = this.head;
    let string = "";
    while (current) {
      string += `(${current.value}) -> `;
      current = current.next;
    }
    string += "null";
    return string;
  }

  // Extra credit //

  insertAt(value, index) {
    if (index < 0 || index > this.length) return null;
    let newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previousNode = this.at(index - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previousNode = this.at(index - 1);
      previousNode.next = previousNode.next.next;
    }
    this.length--;
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

console.log("------getHead------");
console.log(list.getHead()); // 1

console.log("------getTail------");
console.log(list.getTail()); // C

console.log("------size------");
console.log(list.size()); // 6

console.log("------at(index)------");
console.log(list.at(0)); // 1
console.log(list.at(5)); // C

console.log("------pop------");
console.log(list.pop()); // 1, 2, 3, A, B, C >>> 1, 2, 3, A, B

console.log("------contains------");
console.log(list.contains(1)); // true
console.log(list.contains(2)); // true
console.log(list.contains("C")); // false
console.log(list.contains("asd")); // false

console.log("------find------");
console.log(list.find(1)); // 0
console.log(list.find("B")); // 4
console.log(list.find(4)); // null
console.log(list.find("D")); // null

console.log("------toString------");
console.log(list.toString()); //(1) -> (2) -> (3) -> (A) -> (B) -> (C) -> null

list.removeAt(0); //1, 2, 3, A, B, C >>> 2, 3, A, B, C
list.removeAt(4); //2, 3, A, B, C >>> 2, 3, A, B
list.removeAt(7); //null
list.removeAt(8); //null

list.insertAt(999, 0); //2, 3, A, B >>> 999, 2, 3, A, B
list.insertAt("Tail", 5); //999, 2, 3, A, B >>> 999, 2, 3, A, B, "Tail"

console.log("------list------");
console.log(list);
