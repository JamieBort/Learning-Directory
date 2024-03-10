// Singly-linked List

// Definition for singly-linked list node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Definition for a singly-linked list.
class SinglyList {
  constructor() {
    this.head = null;
  }

  removeNode() {
    this.size--;
  }

  addNode(value) {
    let node = this.head;

    // Check to see if the there are any nodes already.
    if (node === null) {
      node = new Node(value);
      //   this.head = new Node(value);
      // return this.returnStatus({ expr: "added", added: this.head.value }); // TODO: Come back to this.
      console.log("the top:", node);
      return;
      return node;
      return this.head;
    } else {
      return this.addNode(node.next);

      //   console.log("the next node:", node);
      node.next = new Node(value);
      //   console.log("the next node:", node);
      //   return;
      return node;
      return this.head;
    }
  }

  //   returnSize = (size = this.size) => size;
  returnSize = (size = 1 + this.head.next) => size;

  // TODO: Come back to this.
  returnStatus(payload, head = this.head, tail = this.tail, size = this.size) {
    let action = {};
    // payload2 = [{ added: 5 }, { removed: 3 }, ["searched", 9, true], ["searched", 7, false]];
    // console.log("payload:", payload);
    switch (payload.expr) {
      case "added":
        // action = { added: 4 };
        action = { added: payload.added };
        // console.log("added");
        break;
      case "removed":
        // console.log("removed");
        action = { removed: 3 };
        break;
      case "searchedTrue":
        // console.log("searchedTrue");
        action = { "searched for": 11, result: "found" };
        break;
      case "searchedFalse":
        // console.log("searchedFalse");
        action = { "searched for": 2, result: "not found" };
        break;
      default:
        console.log(`*** We need to define expr: ${payload.expr}. ***`);
    }
    return { head, tail, size, action };
  }
}
// [33,0] [44,1] [9,2][-55,3] [66,4] etc.
const first = new SinglyList();
console.log(first.addNode(33), `\n--------------------------------`);
console.log(first.addNode(44), `\n--------------------------------`);
// console.log(first.addNode(9), `\n--------------------------------`);
// console.log("Size:", first.returnSize(), `\n------------------------------`);
