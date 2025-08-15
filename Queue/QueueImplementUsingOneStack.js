
var MyQueue = function () {
    this.s1 = []
    // this.s2 = []
}

MyQueue.prototype.push = function (x) {
    this.s1.push(x);
}
MyQueue.prototype.pop = function () {
    let top = this.s1.pop();
    if (this.s1.length == 0) {
        return top
    }
    let item = this.pop();
    this.s1.push(top);
    return item
}
MyQueue.prototype.top = function () {
    let top = this.s1.pop();
    if (this.s1.length == 0) {
        this.push(top)
        return top
    }
    let item = this.top();
    this.s1.push(top);
    // console.log(top)
    return item
    // return this.s2[this.s2.length - 1]
}
MyQueue.prototype.isEmpty = function () {
    return this.s2.length == 0
}

let newQue = new MyQueue();
newQue.push(1)
newQue.push(2)
newQue.push(3)
newQue.push(4)
console.log(newQue.top())
console.log(newQue.s1)
// newQue.pop()
// console.log(newQue.pop())
// console.log(newQue.pop())
// console.log(newQue.pop())
// console.log(newQue.pop())
// console.log(newQue.s1)
// newQue.pop()
// console.log(newQue.top())