class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(element) {
        let newNode = new Node(element);
        newNode.next = this.top
        this.top = newNode;
        this.length++;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("stack is empty")
            return;
        }
        let poppedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedNode.data;
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty ")
            return
        }
        return this.top.data;
    }
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty ")
            return
        }
        let current = this.top;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
    size() {
        return this.length
    }
    isEmpty() {
        return this.top == null
    }
}
let stack = new Stack()
stack.push(4)
stack.push(5)
stack.push(2)
stack.push(1)
// stack.print()
// console.log(stack.peek())
console.log(stack.pop())
// console.log(stack.peek())
console.log(" ")
stack.print()