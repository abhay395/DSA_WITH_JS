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
    let dummy = new Node(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    while (current && current.next) {
        let nextPair = current.next.next;
        let second = current.next;
        second.next = current;
        current.next = nextPair;
        prev.next = second;
        prev = current
        current = nextPair
    }
    return dummy.next;
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