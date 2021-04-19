class ListNode {
    constructor(head = null) {
        this.head = head
        this.next = null
    }

    // const list = {
    //     head: {
    //         value: 6
    //     next: {
    //             value: 10                                             
    //         next: {
    //                 value: 12
    //             next: {
    //                     value: 3
    //                 next: null
    //                 }
    //             }
    //         }
    //     }
    // }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }

}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
// node1.next = node2

console.log(node1);
console.log(node2);