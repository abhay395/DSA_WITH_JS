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
function reverseList(head) {
    let prev = null;
    let front = head;
    while (front) {
        let temp = front.next;
        front.next = prev;
        prev = front
        front = temp;
    }
    return prev;
}
function CheckThatAlistisPalidromeOrNot(head) {
    // let arr = [];//! Brute Force Solution
    // let current = head;
    // while (current!= null) {
    //     arr.push(current);
    //     current = current.next;
    // }
    // let i = 0;
    // let j = arr.length - 1;
    // while (i < j) {
    //     if (arr[i].data != arr[j].data) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let newHead = reverseList(slow.next)
    let first = head;
    let second = newHead;
    let flag = true;
    while (second) {
        if (first.data != second.data) {
            flag = false
            
            break;
        }
        first = first.next;
        second = second.next;
    }
    reverseList(newHead)
    return flag
    // printList(slow.next)

}
let head = new Node(1);
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 3);
head = insertNodeAtTail(head, 3);
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 1);
// head = insertNodeAtTail(head, 1);
// head = reverseList(head)
// printList(head)
console.log(CheckThatAlistisPalidromeOrNot(head))

// console.log("heskks")
