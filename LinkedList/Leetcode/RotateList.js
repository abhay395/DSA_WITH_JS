function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function printList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}
function length(head) {
    let current = head;
    let i = 0;

    while (current) {
        i++
        current = current.next
    }
    return i;
}
var rotateRight = function (head, k) {
    // for (let i = 0; i < k; i++) { //! Brute Force Soultion
    //     let temp = head;
    //     while (temp.next.next) {
    //         temp = temp.next;
    //     }
    //     temp.next.next = head;
    //     head = temp.next
    //     temp.next = null
    // }
    // return head
    if(!head ||!head.next || k==0){return head;}//? optimal soution 
    let l = 1;
    let temp = head;
    while (temp.next) {
        temp = temp.next;
        l++;
    }
    k = k % l;
    let end = l - k;
    temp.next = head;

    while (end > 0) {
        temp = temp.next;
        end--;
    }
    head = temp.next;
    temp.next = null;
    return head
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
printList(head)
head = rotateRight(head, 5)
console.log(" ")
printList(head)