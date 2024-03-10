// JavaScript Binary Search Tree (BST)

// NOTE: the code could be cleaned up. Specifically, it could be written more uniformly.

// Class for creating a node.
class Node {
  // Renamed "data" to "value".
  constructor(value, left, right) {
    this.value = value === undefined ? null : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Class for creating, adding nodes to, removing nodes from, and searching a BST.
class BST {
  // At the bare minimum, a BST class consists of a single root node.
  constructor() {
    // This root is instantiated as null because we do not have anything else to create yet.
    // This is in preparation of building out the tree.
    this.root = null;
  }

  addNode(value) {
    const node = this.root;
    // Assume there are no nodes.
    if (node === null) {
      // Assign it to the first one.
      this.root = new Node(value);
      console.log(`${value} has been added`);
      return;
    }
    // If there is a node, traverse down until we find the last one. Search until node === null.
    else {
      // Then add the value at that location where node === null.
      return this.searchBSTandAddValue(value, node);
    }
  }

  // This traverses the tree for the node where value should be added.
  // And then adds the value at that location where node === null.
  searchBSTandAddValue(value, node) {
    if (value < node.value) {
      if (node.left === null) {
        console.log("Found the last node on the left.");
        node.left = new Node(value);
        return;
      } else if (node.left !== null) {
        // Continue searching down the left side.
        return this.searchBSTandAddValue(node.left);
      } else {
        console.log("I am not sure 1.");
      }
    } else if (value > node.value) {
      if (node.right === null) {
        console.log("Found the last node on the right.");
        node.right = new Node(value);
        return;
      } else if (node.right !== null) {
        // Continue searching down the right side.
        return this.searchBSTandAddValue(node.right);
      } else {
        console.log("I am not sure 2.");
      }
    } else {
      // value = node.value. It is a duplicate do nothing.
      return null;
    }
  }

  // Method for removing a node.
  removeNode(value) {
    // // Determine if the value exists.
    if (!this.findNode(value)) {
      console.log(value, "does not exist.");
      // return false;
    }

    // Remove value
    let current = this.root;
    while (current) {
      if (value === current.value) {
        console.log("Removing", value);
        console.log("current", current);
        current.value = null;
        current.left = null;
        current.right = null;
        // current = null;
        console.log("current", current);
      }
      if (value < current.value) current = current.left;
      else current = current.right;
    }
  }

  // Method for finding the smallest value in the tree.
  findMin() {
    let current = this.root;
    if (current === null) return false;
    while (current.left !== null) current = current.left;
    console.log("the min is:", current.value);
    return current.value;
  }

  // Method for finding the larges value in the tree.
  findMax() {
    let current = this.root;
    if (current === null) return false;
    while (current.right !== null) current = current.right;
    console.log("the max is:", current.value);
    return current.value;
  }

  // This searches the tree for a specific node.
  findNode(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        console.log("Value exists", value);
        return true;
      }
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    console.log("Value does not exist");
    return false;
  }
}

const firstBST = new BST();
// firstBST.findMax();
// firstBST.addNode(4);
firstBST.removeNode(4);
// firstBST.findMax();
// // firstBST.findNode(3);
// firstBST.findMin();
// firstBST.findMin();
// firstBST.findMax();
// firstBST.findNode(2);
// firstBST.addNode(3);
// firstBST.findNode(3);
