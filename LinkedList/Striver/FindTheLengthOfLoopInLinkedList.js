class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to the top
    push(element) {
        this.items.push(element);
    }

    // Pop element from the top
    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    // Peek top element without removing
    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}


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
    let index = 0;
    while (current != null && index < 4) {
        console.log(current.data);
        current = current.next;
        index++
    }
}
function FindLengthOfLoop(head) {
   
}
let head = new Node(1);
head = insertNodeAtTail(head, 2);
// head.next.next = head
head = insertNodeAtTail(head, 0);
head = insertNodeAtTail(head, -4);
// // head = insertAtHead(head, 5);
head.next.next.next.next = head.next
// printList(head)
console.log(detectLoopInList(head))


console.log("heskks")
