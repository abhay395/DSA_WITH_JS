function Node(data) {
    this.data = data;
    this.next = null;
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

function printList(node) {
    let current = node;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}
function segretEvenAndOddNumber(head) {
    // let current = head; //! Brute force And not accepted 
    // let arr = [];
    // let index = 1;
    // while (current) {
    //     if ((index % 2) != 0) arr.push(current.data);
    //     current = current.next;
    //     index++;
    // }
    // index = 1;
    // current = head;
    // while (current) {
    //     if ((index % 2) == 0) arr.push(current.data);
    //     current = current.next;
    //     index++;
    // }
    // current = head;
    // index = 0;
    // while (current) {
    //     current.data = arr[index];
    //     current = current.next;
    //     index++;
    // }
    // return head;
    if (!head) return null
    let evenHead = null;
    let evenTail = null;
    let oddHead = null;
    let oddTail = null;
    let current = head;
    let isOdd = true;
    while (current) {
        let temp = current.next;
        current.next = null
        if (isOdd) {
            if (!oddHead) {
                oddHead = current;
                oddTail = current;
            } else {
                oddTail.next = current
                oddTail = current;
            }
        } else {
            if (!evenHead) {
                evenHead = current
                evenTail = current
            } else {
                evenTail.next = current
                evenTail = current;
            }
        }
        isOdd = !isOdd
        current = temp
    }
    oddTail.next = evenHead
    return oddHead;
}

let head = new Node(1);
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 3);
// head = insertNodeAtTail(head, 4);
// head = insertNodeAtTail(head, 5);
// head = insertNodeAtTail(head, 6);
// head = insertNodeAtTail(head, 7);
head = segretEvenAndOddNumber(head)
printList(head)
// head = insertNodeAtTail(head, 6);
// head = insertNodeAtTail(head, 7);
// printList(head)
// console.log(head)