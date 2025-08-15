
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x);
    while (this.q2.length > 0) {
        this.q1.push(this.q2.shift());
    }
    [this.q1, this.q2] = [this.q2, this.q1]
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q2.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q2[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q2.length == 0
};

//   Your MyStack object will be instantiated and called as such:
var obj = new MyStack()
obj.push(4)
// obj.push(5)
// var param_2 = obj.pop()
// var param_2 = obj.pop()
// var param_3 = obj.top()
console.log(obj.empty())
// var param_4 = obj.empty()
