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
function detectLoopInList(head) {
    // let collision = 0;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow
        }
    }
    return null
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
