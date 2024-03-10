// SinglyLinkedList.js

// My data object:
const aLinkedList = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

//  Define node.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  //   printConstructor = () => console.log("My Node constructor:", this);
}

//  Define Singly-linked List:
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  iterateThrough() {
    console.log(`=======================================\niterateThrough:`);
    let current = this.head;
    console.log(`current:\t`, current);
    console.log(`true && current:`, true && current);
    // console.log(false && current);
    console.log(`true || current:`, true || current);
    // console.log(false || current);

    // console.log("before:", current);
    // while (current.next !== null) {
    //   current = current.next;
    //   console.log("after:", current);
    //   console.log("--------------------------------------------------------------------");
    // }
    console.log(`=======================================`);
  }

  // Add a node to the end of the list.
  addNode(data) {
    // console.log(`=======================================\naddNode:`);
    const newNode = new Node(data);
    // this.head === null -> !this.head === true (!this.head evaluates to true)
    if (!this.head) {
      //   console.log("!this.head:", !this.head);
      this.head = newNode;
      this.tail = newNode;
    }
    // this.head === null -> this.head evaluates to false
    else {
      //   console.log("!this.head:", !this.head);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log("this:", this);
    // console.log(`=======================================`);
    return this; // returning the entire linked list
  }

  //   printConstructor = () => console.log("My SinglyLinkedList constructor:", this);

  printSinglyLinkedListIteratively() {
    console.log(`=======================================\nprintSinglyLinkedList:`);
    let current = this.head;
    while (current != null) {
      console.log(`current inside while:\n`, current);
      current = current.next;
    }
    console.log(`current after while:\n`, current, `\n=======================================`);
  }
  printSinglyLinkedList() {
    console.log(`=======================================\nprintSinglyLinkedList2:\n`, this.head, `\n=======================================`);
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.iterateThrough();
// singlyLinkedList.printSinglyLinkedListIteratively();
singlyLinkedList.addNode(55);
singlyLinkedList.iterateThrough();
// // singlyLinkedList.printSinglyLinkedListIteratively();
// singlyLinkedList.addNode(11);
// singlyLinkedList.addNode(2);
// // singlyLinkedList.printSinglyLinkedListIteratively();
// // singlyLinkedList.printSinglyLinkedList();
