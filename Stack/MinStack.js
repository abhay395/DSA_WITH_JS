
var MinStack = function () {
    this.st = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.st.length == 0) {
        this.st.push([val, val]);
        return
    }
    let [value, min] = this.st[this.st.length - 1];
    if (min > val) this.st.push([val, val])
    else this.st.push([val, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let [val, min] = this.st.pop();
    return val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.st[this.st.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.st[this.st.length - 1][1]
};

//   Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.push(-1)
// obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()

console.log(obj)