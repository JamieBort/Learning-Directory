// scratch.js
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

let current = aLinkedList.head;
console.log("before:", current);
while (current.next !== null) {
  current = current.next;
  console.log("after:", current);
  console.log("--------------------------------------------------------------------");
}
