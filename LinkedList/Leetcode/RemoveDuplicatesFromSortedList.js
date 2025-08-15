function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function insertNodeAtTail(node, data) {
    let newNode = new ListNode(data);
    let current = node;
    while (current.next != null) {
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
function lengthOfList(head) {
    let current = head;
    let i = 0
    while (current) {
        i++;
        current = current.next;
    }
    return i;
}
function RemoveDuplicatesFromSortedList(head) {
    let current = head;
    while (current.next) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next
        }
    }
    return head
}

let head = new ListNode(1)
head = insertNodeAtTail(head, 1)
head = insertNodeAtTail(head, 1)
head = insertNodeAtTail(head, 1)
head = insertNodeAtTail(head, 1)
head = RemoveDuplicatesFromSortedList(head)
// console.log(head)
printList(head)
// printList(head)