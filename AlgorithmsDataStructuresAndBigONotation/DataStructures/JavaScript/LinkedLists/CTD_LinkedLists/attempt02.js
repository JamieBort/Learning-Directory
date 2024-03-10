// attempt02.js

// From: assignment.js

// Node type in the linked list
function Node(data, next) {
  this.val = data;
  this.next = next;
}

// {val: 3, next: myNewNode} --> {val: 5, next: mySecondNewNode} --> {val: 9, next: null}

// let endNode = new Node(9, null);
// let secondNode = new Node(5, endNode);
// let headNode = new Node(3, secondNode)

// let nextNode = null;
// for (let i = array.length-1; i >= 0; i--) {

// }

// Input: an array of values (data) e.g. [1,2,3,4]
// Output: head of the list
function createLinkedList(data) {
  // for each piece of data, make a node
  // return the head of the list
  let head = null,
    newNode = null,
    nextPtr = null;

  for (let i = data.length - 1; i >= 0; i--) {
    console.log("i:", i);
    console.log("data[i]:", data[i]);
    newNode = new Node(data[i], nextPtr);
    nextPtr = newNode;
    console.log("nextPtr:", nextPtr);
  }
  head = newNode;
  console.log("head:", head);
  return head;
}
createLinkedList([1, 2, 3, 4]);
