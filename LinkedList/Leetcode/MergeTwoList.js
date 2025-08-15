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
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next
};

let list1 = new ListNode(1);
list1 = insertNodeAtTail(list1, 2)
list1 = insertNodeAtTail(list1, 3)
list1 = insertNodeAtTail(list1, 4);

let list2 = new ListNode(1);
list2 = insertNodeAtTail(list2, 3)
list2 = insertNodeAtTail(list2, 6)
list2 = insertNodeAtTail(list2, 7)
let mergedList = mergeTwoLists(list1, list2)
printList(mergedList)