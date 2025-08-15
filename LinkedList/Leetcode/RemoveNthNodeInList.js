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
var removeNthFromEnd = function (head, n) {
    // let length = lengthOfList(head); //! Brute Force Soultioin in this code will get 2L time complexity if node is on the end;
    // let pos = length - n
    // let dummy = new ListNode(0);
    // dummy.next = head;
    // let current = head;
    // let prev = dummy;
    // let i = 0;
    // console.log(pos)
    // while (current && i < pos) {
    //     prev = current;
    //     current = current.next;
    //     i++;
    // }
    // return current
    // if (current)
    //     prev.next = current.next;
    // return dummy.next
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    let i = 0;
    while (fast && fast.next) {
        if (i < n) {
            fast = fast.next;
            i++;
        } else {
            slow = slow.next;
            fast = fast.next;

        }
    }
    // if (!fast) {
    //     console.log("je")
    //     return head.next;
    // }
    // if (i != n) {
    //     return head.next;
    // }
    slow.next = slow.next.next
    return dummy.next;
};

let head = new ListNode(1)
head = insertNodeAtTail(head, 2)
head = insertNodeAtTail(head, 3)
head = insertNodeAtTail(head, 4)
head = insertNodeAtTail(head, 5)
head = removeNthFromEnd(head, 5)
// console.log(head)
printList(head)
// printList(head)