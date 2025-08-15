class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.top = null;
        this.end = null;
        this.lentht = 0
    }
    enqueue(element) {
        let newNode = new Node(element);
        if (!this.top && !this.rare) {
            this.top = newNode;
            this.end = newNode;
            this.lentht++;
            return
        }
        this.end.next = newNode
        end = newNode;
        this.lentht++;
    }
    dequeu() {
        if (this.isEmpty()) {
            return null
        }
        let dequeuNode = this.top
        if (this.lentht == 1) {
            this.top = null;
            this.end = null;
            this.lentht = 0
            return
        }
        this.top = this.top.next;
        return dequeuNode.data
    }
    front() {
        if (this.isEmpty()) {
            return null
        }
        return this.top.data;
    }
    rare() {
        if (this.isEmpty()) {
            return null
        }
        return this.end.data
    }
    size() {
        return this.lentht;
    }
    print() {
        if (this.isEmpty()) {
            return null
        }
        let current = this.top;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    isEmpty() {
        return top === null
    }
}

