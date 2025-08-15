
class Queue {
    constructor() {
        this.item = [];
        this.front = 0;
    }
    enqueue(element) {
        // this.front++;
        this.item.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        this.front++;
    }
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        return this.item[this.front];
    }
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        this.item.forEach((item) => console.log(item))
    }
    size() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        return this.item.length - this.front 
    }
    isEmpty() {
        return this.front == this.item.length
    }
}

let queue = new Queue();
queue.enqueue(5)
queue.enqueue(55)
queue.enqueue(2)
queue.enqueue(4)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.print()
console.log(queue.size())
// console.log(queue.peek())