function Node(data) {
    this.val = data;
    this.next = null
}

function insertNodeAtTail(node, data) {
    let newNode = new Node(data);
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
var FindTheSumeOfTwoNumber = function (list1, list2) {
    // let newListHead = null;
    // let newListTail = null;
    // let first = list1;
    // let second = list2
    // let firstdig = 0;
    // while (first && second) {
    //     if (!newListHead) {
    //         let total = first.val + second.val;
    //         if (total >= 10) {
    //             firstdig = Math.floor(total / 10)
    //             let seconddig = total % 10
    //             newListHead = new Node(seconddig);
    //             newListTail = newListHead;
    //         } else {
    //             newListHead = new Node(total);
    //             newListTail = newListHead;
    //         }

    //     } else {
    //         let total = first.val + second.val + firstdig;
    //         if (total >= 10) {
    //             firstdig = Math.floor(total / 10)
    //             let seconddig = total % 10
    //             newListTail.next = new Node(seconddig);
    //             newListTail = newListTail.next;
    //         } else {
    //             newListTail.next = new Node(total);
    //             newListTail = newListTail.next;
    //             firstdig = 0;
    //         }
    //     }
    //     first = first.next;
    //     second = second.next;
    // }
    // while (first) {
    //     let total = first.val + firstdig;
    //     if (total >= 10) {
    //         firstdig = Math.floor(total / 10)
    //         let seconddig = total % 10
    //         newListTail.next = new Node(seconddig);
    //         newListTail = newListTail.next;
    //     } else {
    //         newListTail.next = new Node(total);
    //         newListTail = newListTail.next;
    //         firstdig = 0;
    //     }
    //     first = first.next
    // }
    // while (second) {
    //     let total = second.val + firstdig;
    //     if (total >= 10) {
    //         firstdig = Math.floor(total / 10)
    //         let seconddig = total % 10
    //         newListTail.next = new Node(seconddig);
    //         newListTail = newListTail.next;
    //     } else {
    //         newListTail.next = new Node(total);
    //         newListTail = newListTail.next;
    //         firstdig = 0;
    //     }
    //     second = second.next
    // }
    // if (firstdig != 0) {
    //     newListTail.next = new Node(firstdig)
    //     newListTail = newListTail.next
    // }
    // return newListHead
    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;
    while (list1 || list2 || carry) {
        let sum = carry;
        if (list1) {
            sum += list1.val
            list1 = list1.next
        };
        if (list2){
             sum += list2.val
             list2 = list2.next
        };
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10);
        current = current.next;
    }
    return dummy.next;
};

let head1 = new Node(2)
head1 = insertNodeAtTail(head1, 4)
head1 = insertNodeAtTail(head1, 3)
// head1 = insertNodeAtTail(head1, 9)
// head1 = insertNodeAtTail(head1, 9)
// head1 = insertNodeAtTail(head1, 9)
// head1 = insertNodeAtTail(head1, 9)
// head = insertNodeAtTail(head, 4)
// head = insertNodeAtTail(head, 4)
// head = insertNodeAtTail(head, 6)
let head2 = new Node(5)
head2 = insertNodeAtTail(head2, 6)
head2 = insertNodeAtTail(head2, 4)
// head2 = insertNodeAtTail(head2, 9)
let sumList = FindTheSumeOfTwoNumber(head1, head2)
printList(sumList)
// head2 = insertNodeAtTail(head2, 4)
// head2 = insertNodeAtTail(head2, 4)
// head2 = insertNodeAtTail(head2, 6)
// printList(head)
// head = removeElements(head, 1)
// console.log(" ")
// printList(head)