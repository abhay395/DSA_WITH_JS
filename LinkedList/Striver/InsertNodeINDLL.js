function LinkedList(data) {
    this.data = data
    this.next = null
    this.prev = null
}

function insertNodeAtHead(node, data) {
    let newNode = new LinkedList(data);
    newNode.next = node;
    node.prev = newNode;
    node = newNode;
    return node;
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
function insetAtPosition(node, data, pos) {
    if (pos == 0) {
        return insertNodeAtHead(node, data)
    }
    let newNode = new LinkedList(data)
    let index = 0;
    let first = null
    let second = node;
    while (second != null && index < pos) {
        first = second;
        second = second.next;
        index++;
    }
    if (second == null) {
        if (index < pos) {
            console.log("Linked list out of bound")
            return node;
        }
        first.next = newNode;
        newNode.prev = first;
        return node;
    }
    first.next = newNode;
    newNode.prev = first;
    newNode.next = second;
    second.pre = newNode;
    return node;
}
function printList(node) {
    let current = node;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}
function deleteAthead(node) {
    let temp = node;
    node.next.prev = null;
    node = temp.next;
    return node;
}
function deleteAtTail(node) {
    let current = node;
    while (current.next != null) {
        current = current.next
    }
    current.prev.next = null;
    return node;
}
function deleteAtPosition(node, pos) {
    let index = 0;
    let first = null;
    let second = node;
    if (pos == 0) {
        return deleteAthead(node);
    }
    while (second != null && index < pos) {
        first = second;
        second = second.next;
        index++;
    }
    if (second == null) {
        console.log("Index is out of limit I can't delete it on linked list")
        return;
    }
    if(second.next==null){
        return deleteAtTail(node);
    }
    first.next = second.next;
    second.next.prev = first;
    second.next = null;
    second.prev = null;
    return node;
}
let head = new LinkedList(4);
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 3);
head = insertNodeAtHead(head, 5)
// console.log(head.data)
head = insertNodeAtTail(head, 5);
printList(head);
console.log(" ")
head = insetAtPosition(head, 87, 5)
printList(head);
console.log(" ")
head = deleteAtPosition(head, 6);
printList(head)
// console.log(" ")
// // head = deleteAtTail(head);
// printList(head)