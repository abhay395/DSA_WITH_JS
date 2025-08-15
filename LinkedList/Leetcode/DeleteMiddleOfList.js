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
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var DeleteMiddleOfList = function (head) {
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prev) prev.next = slow.next
    return head;
};

let list1 = builtList([1, 2, 3, 4, 5]);
printList(list1)
DeleteMiddleOfList(list1)
printList(list1)