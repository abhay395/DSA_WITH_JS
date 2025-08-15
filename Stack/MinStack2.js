
var MinStack = function () {
    this.st = []
    this.min = Number.MAX_VALUE
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.st.length == 0) {
        this.min = val;
        this.st.push(val)
        return;
    }
    if (val < this.min) {
        let newVale = 2 * val - this.min
        this.st.push(newVale);
        this.min = val;
        return
    }
    this.st.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.st[this.st.length - 1] < this.min) {
        let oldNewVal = this.st.pop();
        let popedVal = this.min
        this.min = 2 * this.min - oldNewVal
        return popedVal
    }
    return this.st.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.st[this.st.length - 1] < this.min) {
        return this.min;
    } else {
        return this.st[this.st.length - 1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min
};

var obj = new MinStack()
obj.push(1)
obj.push(-2)
obj.push(-3)
// obj.push(-3)
obj.pop()
// obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(obj,param_3,param_4)