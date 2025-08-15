class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
            return
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
            return null
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0
    }
    print() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i])
        }
    }
    size() {
        return this.items.length
    }
}

let newStack = new Stack()

newStack.push(4);
newStack.push(5);
newStack.push(6);
newStack.push(7);
newStack.push(8);
newStack.push(9);
newStack.print()
// console.log(newStack.size())
// console.log(newStack.peek())
// newStack.pop()
// newStack.pop()
// newStack.pop()
// newStack.pop()
// newStack.pop()
// console.log(newStack.peek())