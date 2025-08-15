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

function ReverseByRecursen(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newHead = ReverseByRecursen(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
let head = new Node(1);
head = insertAtHead(head, 2);
head = insertAtHead(head, 3);
head = insertAtHead(head, 4);
head = insertAtHead(head, 5);
printList(head)
head = ReverseByRecursen(head)
// console.log(" ")
// head = ReverseByRecursen(head);
console.log(head)
printList(head)

// console.log(head)