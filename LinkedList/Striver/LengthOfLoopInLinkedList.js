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
    let index = 0;
    while (current != null && index < 4) {
        console.log(current.data);
        current = current.next;
        index++
    }
}
function lengthOfloop(head) {
    // // let current = head;//! Brute force Soultion 
    // // let visited = new Set();

    // // while (current != null) {
    // //     if (visited.has(current)) {
    // //         console.log(current)
    // //         return true;
    // //     }
    // //     visited.add(current)
    // //     current = current.next;
    // // }
    // // return false;
    // let slow = head;
    // let fast = head;
    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if(slow==fast){
    //         return slow
    //     }
    // }
    // return false
    let slow = head;
    let fast = head;
    let count = 1;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast==slow){
            fast = fast.next;
            while(fast!=slow){
                fast = fast.next;
                count++;
            }
            break
        }
    }
    return count
}
let head = new Node(1);
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 0);
head = insertNodeAtTail(head, -4);
// head = insertAtHead(head, 5);
head.next.next.next.next = head.next
// console.log(head.next.next.next)
// printList(head)
console.log(lengthOfloop(head))


