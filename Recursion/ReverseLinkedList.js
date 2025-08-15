class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
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
function reverseLinkedList(head) {
    if (!head || !head.next) {
        return head
    }
    let newHead = reverseLinkedList(head.next);
    head.next.next = head
    head.next = null
    return newHead
}

let head = new Node(4);
head.next = new Node(8);
head.next.next = new Node(7);
head.next.next.next = new Node(9);
printList(head)
head = reverseLinkedList(head);
console.log(" ")
printList(head)