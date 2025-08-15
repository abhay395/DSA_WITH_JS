
//  * Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let node = new ListNode(4);
node.next = new ListNode(6);
node.next.next = new ListNode(8);
node.next.next.next = new ListNode(9);

var lengthOfLinkedList = (node) => {
    let current = node;
    let lenght = 0;
    while (current != null) {
        lenght++;
        current = current.next;
    }
    return lenght;
}
function PrintNoe(node) {
    let current = node;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
    console.log(" ")
}
console.log(lengthOfLinkedList(node))