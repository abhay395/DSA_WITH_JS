class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     insertAtHead(data) {
//         let newNode = new Node(data);
//         if (this.head == null) {
//             this.head = newNode;
//             return;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
//     insertAtTail(data) {
//         let newNode = new Node(data);
//         if (this.head == null) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next != null) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
//     insertAtPosition(data, pos) {
//         let newNode = new Node(data);
//         if (this.head == null) {
//             this.head = newNode;
//             return;
//         }
//         let index = 0;
//         let first = null;
//         let second = this.head;
//         if (pos == 0) {
//             newNode.next = this.head;
//             this.head = newNode
//             return;
//         }
//         // let current = this.head
//         while (second != null && index < pos) {
//             first = second;
//             second = second.next;
//             index++;
//         }
//         if (index < pos) {
//             console.log("Oute of limit")
//             return;
//         }
//         first.next = newNode;
//         newNode.next = second;
//     }
//     printList(){
//         let current = this.head;
//         if(current==null){
//             console.log("List is Empty")
//             return;
//         }
//         while(current!=null){
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }
function insertAtHead(data, head) {
    let newNode = new Node(data);
    newNode.next = head;
    return newNode
}
function printList(head) {
    let current = head
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}
// const list1 = new LinkedList();
// list1.printList();
let head = new Node(4);
head.next = new Node(8);
head.next.next = new Node(7);

head = insertAtHead(9,head)
printList(head)
// const list2 = list1.insertAtTail(4)

// list1.insertAtTail(5)
// list1.insertAtTail(66)
// list1.insertAtTail(478)
// list1.insertAtTail(4)
// list1.insertAtPosition(89,6)
// list1.printList();
