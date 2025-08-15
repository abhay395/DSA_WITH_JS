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
    console.log(" ")
}

function builtList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let item of arr) {
        current.next = new ListNode(item);
        current = current.next;
    }
    return dummy.next;
}
function findMiddle(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = slow.next;
    }
    if (prev) prev.next = null;
    return slow
}
function mergeList(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if(current) current.next = l1 || l2
    return dummy.next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let middle = findMiddle(head);
    let left = sortList(head);
    let right = sortList(middle);
    return mergeList(left, right)
};

let list1 = builtList([1, 4, 2, 3, 6, 2]);
printList(list1)
list1 = sortList(list1)
// DeleteMiddleOfList(list1)
printList(list1)