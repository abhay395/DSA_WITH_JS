
function topOnSt(arr) {
    return arr[arr.length - 1]
}
var MinStack = function () {
    this.stack = []
    this.minVal = Number.MAX_VALUE;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length == 0) {
        this.minVal = val;
        this.stack.push(val);
        return
    }
    else if (val < this.minVal) {
        let newVal = 2 * val - this.minVal;
        this.stack.push(newVal);
        this.minVal = val;
        return
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (topOnSt(this.stack) < this.minVal) {
        let newVal = this.stack.pop();
        let poppedVal = this.minVal
        this.minVal = 2 * poppedVal - newVal;
        return poppedVal
    }
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (topOnSt(this.stack) < this.minVal) {
        return this.minVal
    }
    return topOnSt(this.stack)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minVal
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