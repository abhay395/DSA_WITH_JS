
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

var findElement = (node, val) => {
    let current = node;
    // let lenght = 0;
    while (current != null) {
        if (current.val == val) return true;
        current = current.next;
    }
    return false;
}
function PrintNoe(node) {
    let current = node;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
    console.log(" ")
}
console.log(findElement(node, 5))