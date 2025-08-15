function Node(data) {
    this.data = data;
    // this.next = null;
}

function insertAtHead(head, data) {
    let newNode = new Node(data);
    newNode.next = head;
    return newNode
}
function printList(node) {
    let current = node;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

function ReverseTheList(head) {
    let prev = null;
    let temp = head;
    // let temp = null;
    while (temp != null) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

function ReverseByRecursen(head,prev) {
    if (head.next == null) {
        return head;
    }
    let prev = null
    let current = ReverseByRecursen(head.next);
    current.next = current
    return current
}
let head = new Node(1);
head = insertAtHead(head, 2);
head = insertAtHead(head, 3);
head = insertAtHead(head, 4);
head = insertAtHead(head, 5);
printList(head)
// head = ReverseTheList(head)
// console.log(" ")
head = ReverseByRecursen(head);
console.log(head)
// printList(head)

// console.log(head)