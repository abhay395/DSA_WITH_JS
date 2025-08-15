function Node(data) {
    this.data = data;
    this.next = null;
}

function insertNodeAtTail(node, data) {
    let newNode = new Node(data);
    let current = node;
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    return node;
}
function printList(node) {
    let current = node;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}
function lengthOfList(head) {
    let current = head;
    let length = 0;
    while (current != null) {
        current = current.next;
        length++;
    }
    return length;
}
function findMiddleOfList(head) {
    // ?Brute Force
    //     let length = lengthOfList(head);
    //     length = Math.floor(length / 2)
    //     let index = 0;
    //     let current = head;
    //     while(current!=null && index<length){
    //         current = current.next;
    //         index++
    //     }
    //    return current
    //? optimal Solution
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}
let head = new Node(1);
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 3);
head = insertNodeAtTail(head, 4);
head = insertNodeAtTail(head, 5);
let middleOfList = findMiddleOfList(head)
// printList(head)
console.log(middleOfList.data)
