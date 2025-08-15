function ListNode(data) {
    this.next = null;
    this.val = data
    // this.prev = null;
}

function insertAtTail(head, data) {
    let current = head;
    let newNode = new ListNode(data);
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

function printList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }

}
function Practice(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    while(current){
        // let temp = current.next;
        if(current.val==val){
            prev.next = current.next;
            current = current.next;
        }else{
            prev = current;
            current = current.next
        }
    }
    return dummy.next
}

let head = new ListNode(1);
head = insertAtTail(head, 2)
head = insertAtTail(head, 3)
head = insertAtTail(head, 4)
head = insertAtTail(head, 6)
head = insertAtTail(head, 6)
// printList(head)
// head.next.next.next.next.next = head.next.next
head = Practice(head,6)
printList(head)
console.log(head)
// head = Practice(head)
// console.log(head)