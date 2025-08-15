
var MyQueue = function () {
    this.s1 = []
    this.s2 = []
}

MyQueue.prototype.push = function (x) {
    if (this.s2.length == 0) {
        this.s2.push(x)
        return;
    }
    while (this.s2.length > 0) {
        this.s1.push(this.s2.pop());
    }
    this.s2.push(x);
    while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
    }
}
MyQueue.prototype.pop = function () {
    return this.s2.pop();
}
MyQueue.prototype.top = function () {
    return this.s2[this.s2.length - 1]
}
MyQueue.prototype.isEmpty = function () {
    return this.s2.length == 0
}

let newQue = new MyQueue();
newQue.push(1)
newQue.push(2)
newQue.push(3)
newQue.push(4)
// newQue.pop()
// newQue.pop()
// newQue.pop()
console.log(newQue.top())