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
function swapPairs(head) {
    if (!head || !head.next) {
        return head
    }
    let first = head;
    let second = head.next;
    first.next = swapPairs(second.next);
    second.next = first;
    return second
}

let head = new Node(4);
head.next = new Node(8);
head.next.next = new Node(7);
head.next.next.next = new Node(9);
printList(head)
head = swapPairs(head);
console.log(" ")
// head = insertAtHead(9, head)
printList(head)