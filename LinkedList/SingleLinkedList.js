class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insetAtEnd(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode
    }
    insertAtHead(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        // let temp = this.head.next;
        // newNode.temp
    }
    insertAtPositon(index, data) {
        let pos = 0;
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let first = null;
        let second = this.head;
        while (second != null && pos < index) {
            first = second;
            second = second.next;
            pos++;
        }
        if (pos !== index) {
            console.log("Index out of bounds");
            return;
        }

        console.log(first?.data, second?.data, "From insertion");

        first.next = newNode;
        newNode.next = second;
    }
    insertAtPosition(index, data) {
        let pos = 0;
        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let first = null;
        let second = this.head;

        while (second !== null && pos < index) {
            first = second;
            second = second.next;
            pos++;
        }

        if (pos !== index) {
            console.log("Index out of bounds");
            return;
        }

        console.log(first?.data, second?.data, "From insertion");

        first.next = newNode;
        newNode.next = second;
    }

    searchElement(element) {
        let current = this.head;
        while (current != null) {
            if (current.data == element) {
                return
            }
        }
    }
    countNode() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
    deleteFromEnd() {
        let current = this.head;
        while (current.next.next != null) {
            current = current.next;
        }
        current.next = null
    }
    deleteFromStart() {
        let temp = this.head;
        this.head = temp.next;
        temp.next = null
    }
    printList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

}
let list = new LinkedList();
list.insetAtEnd(4)
list.insetAtEnd(5)
list.insetAtEnd(7)
list.insetAtEnd(8)
list.insetAtEnd(4)
list.insertAtPositon(4, 222)
list.insertAtPosition(4, 222)
list.printList();
// list.insertAtHead(0);
// list.insertAtHead(1111);
// console.log(list.countNode())