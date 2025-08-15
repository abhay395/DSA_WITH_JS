
function topOnSt(arr) {
    return arr[arr.length - 1]
}
var MinStack = function () {
    this.st1 = []
    this.minSt = [] // it's will stroe minimum value on stack only 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.st1.length == 0) {
        this.st1.push(val)
        this.minSt.push(val)
        return;
    }
    this.st1.push(val)
    if (topOnSt(this.st1) < topOnSt(this.minSt)) {
        this.minSt.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (topOnSt(this.st1) == topOnSt(this.minSt)) {
        this.st1.pop();
        return this.minSt.pop();
    }
    return this.st1.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return topOnSt(this.st1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return topOnSt(this.minSt)
};

var obj = new MinStack()
obj.push(-2)
obj.push(1)
obj.push(-3)
// obj.push(-3)
obj.pop()
// obj.pop()
var top = obj.top()
var min = obj.getMin()
console.log(obj, top, min)