
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

var deleteNode = function (node) {
    let first = null;
    let second = node;
    while (second.next != null) {
        first = second;
        second.val = second.next.val;
        second = second.next;
    }
    if (first.next) {
        first.next = null;
    }
};
//? Optimal Solution 
var deleteNode = function (node) {
   node.val = node.next.val;
   node.next = node.next.next;
};
function PrintNoe(node) {
    let current = node;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
    console.log(" ")
}
PrintNoe(node)
deleteNode(node.next)
PrintNoe(node)