function Node(data) {
    this.val = data;
    this.next = null
}

function insertNodeAtTail(node, data) {
    let newNode = new Node(data);
    let current = node;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return node;
}
function printList(head) {
    let current = head;
    while (current) {
        console.log(current.val)
        current = current.next;
    }
}
var removeElements = function (head, val) {
    // let current = head;
    // let prev = null;
    // let newHead = head
    // while (current) {
    //     if (current.val == val) {
    //         if (!prev) {
    //             newHead = current.next;
    //             current = current.next;
    //             continue;
    //         }
    //         let temp = current.next;
    //         prev.next = temp;
    //         // if(prev) prev.next = temp;
    //         // current.next = null;
    //         current = temp;
    //         continue;
    //     }
    //     prev = current;
    //     current = current.next
    // }
    // return newHead
    let dummy = new Node(0);
    let prev = dummy;
    let current = head;
    while (current) {
        if (current.val == val) {
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next
        }
    }
    return dummy.next
};

let head = new Node(1)
head = insertNodeAtTail(head, 1)
head = insertNodeAtTail(head, 3)
head = insertNodeAtTail(head, 4)
head = insertNodeAtTail(head, 4)
head = insertNodeAtTail(head, 6)
printList(head)
head = removeElements(head, 1)
console.log(" ")
printList(head)