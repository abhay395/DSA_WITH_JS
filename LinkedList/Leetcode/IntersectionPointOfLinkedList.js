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
    let i = 0;
    while (current) {
        current = current.next;
        i++
    }
    return i;
}
function IntersectionPointOfLinkedList(headA, headB) {
    // let current = headA;
    // let map = new Map();
    // while (current) {
    //     map.set(current, true)
    //     current = current.next;
    // }
    // current = headB
    // while (current) {
    //     if (map.has(current)) {
    //         return current
    //     }
    //     current = current.next;
    // }
    // return null
    // let lengthA = lengthOfList(headA); //? difference approach
    // let lengthB = lengthOfList(headB);
    // let firstHead = headA;
    // let secondHead = headB;
    // let index = 0;
    // if (lengthA > lengthB) {
    //     while (firstHead && index < (lengthA - lengthB)) {
    //         firstHead = firstHead.next;
    //         index++;
    //     }
    // } else {
    //     index = 0
    //     while (secondHead && index < (lengthB - lengthA)) {
    //         secondHead = secondHead.next;
    //         index++
    //     }
    // }
    // while (firstHead && secondHead) {
    //     if (firstHead == secondHead) {
    //         return firstHead;
    //     }
    //     firstHead = firstHead.next;
    //     secondHead = secondHead.next;
    // }
    // return null
    let firstHead = headA;
    let secondHead = headB;
    while (firstHead != secondHead) {
        firstHead = firstHead ? firstHead.next : headB;
        secondHead = secondHead ? secondHead.next : headB;
    }
    if (firstHead) return firstHead
    return null
}
let firstHead = new Node(1)
firstHead = insertNodeAtTail(firstHead, 2);
firstHead = insertNodeAtTail(firstHead, 3);
firstHead = insertNodeAtTail(firstHead, 4);
firstHead = insertNodeAtTail(firstHead, 5);
// let scondHead = new Node(6)
IntersectionPointOfLinkedList(firstHead, secondHead)