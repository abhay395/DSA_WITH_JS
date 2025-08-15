/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function stackTop(stack) {
    return stack[stack.length - 1]
}
var dailyTemperatures = function (temperatures) {
    let arr = new Array(temperatures.length).fill(-1);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stackTop(stack)]) {
            let top = stack.pop();
            arr[top] = i - top
        }
        stack.push(i);
    }
    while(stack.length>0){
        let top = stack.pop();
        arr[top] = 0
    }
    return arr
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])