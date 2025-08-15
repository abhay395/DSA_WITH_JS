function Node(val) {
    this.data = val;
    this.next = null;
    this.back = null;
}

function insertAtHead(head, val) {
    let newNode = new Node(val);
    head.back = newNode;
    newNode.next = head;
    // head  = newNode;
    return newNode
}
function printList(head) {
    let current = head;
    while(current!=null){
        console.log(current.data);
        current = current.next;
    }
}

let head = new Node(87);
// head.next = new Node(77);
// head.next.back = head;
head = insertAtHead(head,78)
head = insertAtHead(head,74)
head = insertAtHead(head,71)
// console.log(head.next.next.data)
printList(head)