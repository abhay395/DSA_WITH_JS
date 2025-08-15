function LinkedList(data) {
    this.data = data
    this.next = null
    this.prev = null
}
function insertNodeAtTail(node, data) {
    let newNode = new LinkedList(data);
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
function ReversDoublyLinkedList(node) {
    // let head = node;
    let current = node;
    let temp = null;
    while (current != null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev
    }
    temp = temp.prev;
    return temp;
}
let head = new LinkedList(1);
head = insertNodeAtTail(head, 2)
head = insertNodeAtTail(head, 3)
head = insertNodeAtTail(head, 4)
head = ReversDoublyLinkedList(head)
printList(head)