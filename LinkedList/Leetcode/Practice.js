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
var interesectPoint = function (headA, headB) {
    let set = new Set();
    let currentA = headA;
    let currentB = headB;
    while (currentA) {
        set.add(currentA)
        currentA = currentA.next;
    }
    while (currentB) {
        if (set.has(currentB)) return currentB;
        currentB = currentA.next
    }
};

let list1 = builtList([1, 4, 2, 3, 6, 2]);
let list2 = list1.next;
printList(list1)
let intersect = interesectPoint(list1, list2)
// DeleteMiddleOfList(list1)
// printList(list1)
console.log(intersect)