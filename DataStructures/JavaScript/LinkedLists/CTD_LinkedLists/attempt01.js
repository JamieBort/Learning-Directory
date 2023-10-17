// attempt01.js

// Following along with
// https://www.youtube.com/watch?v=ZBdE8DElQQU
// and
// https://www.youtube.com/watch?v=9YddVVsdG5A
// Started working on this to help with the class for this assignment:
// https://replit.com/@RachelFrenkel1/LinkedLists-Algo#index.js

// We need to create a Node class.
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// We need to create a LinkedList class.
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Traverse the linked list until we reach the last node.
  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       //   console.log("current.data:", current.data);
  //       current = current.next;
  //     }
  //     // console.log("current:", current);
  //   }

  // Add method. Adds a new node to the end of the linked list.
  add(data) {
    const node = new Node(data);
    // // if next = null, we're at the last one.
    // this.head = new Node(data);
    // console.log("this.head", this.head);

    // Traverse the linked list until we reach the last node.
    let current = this.head;
    while (current) {
      console.log("current.data:", current.data);
      current = current.next;
    }
    console.log("current:", current);
    if (this.head === null) {
      console.log("It is null");
      this.head = node;
    } else {
      this.head.next = node;
      console.log("this.head", this.head);
    }
  }

  // Remove method. Removes the node from the end of the list.

  // Print method. Prints to the console the linked list.
  print() {
    let current = this.head;
    while (current) {
      console.log("current.data:", current.data);
      current = current.next;
    }
  }
}

// const n1 = { data: 77 },
//   n2 = { data: 11 };
// n3 = { data: 44 };
// n1.next = n2;
// n2.next = n3;
// console.log(n1);

const ll = new LinkedList();
// // // console.log(ll.head);
// // // console.log(ll.size);
ll.add(77);
ll.add(11);
ll.add(22);
// ll.print();
