import LinkedList from './LinkedList';
import ListNode from './ListNode';

let node1 = new ListNode(2)
// node1   = {
            // this.data = 2
            // this.next = null
        // }

let node2 = new ListNode(5)
// node 2 =  {
                // this.data = 5
                // this.next = null
            // }
node1.next = node2
// node1 =   {
            // this.data = 2
            // this.next = {
                             // this.data = 5
                             // this.next = null
                           // }
          // }

let list = new LinkedList(node1)
// list = {
//     this.head =  {
                    // this.data = 2
                    // this.next = {
                                 // this.data = 5
                                 // this.next = null
                                   // }
                 // }
// }

console.log(list.head.next.data) //returns 5
console.log(list.size());