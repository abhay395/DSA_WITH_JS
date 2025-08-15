/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // let set = new Set(['+', '-', '*', '/'])
    // let stack = [];
    // for (let el of tokens) {
    //     if (set.has(el)) {
    //         let el2 = Number(stack.pop())
    //         let el1 = Number(stack.pop())
    //         console.log(el1, el2)
    //         if (el == "+") {
    //             stack.push(el1 + el2)
    //         }
    //         else if (el == "-") {
    //             stack.push(el1 - el2)
    //         }
    //         else if (el == "*") {
    //             stack.push(el1 * el2)
    //         }
    //         else if (el == "/") {
    //             stack.push(Math.trunc(el1 / el2))
    //         }
    //     } else {
    //         stack.push(el)
    //     }
    // }
    let stack = []
    for (let token of tokens) {
        if (["+", "-", "*", "/"].includes(token)) {
            let b = Number(stack.pop())
            let a = Number(stack.pop())
            let result;
            switch (token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = Math.trunc(a / b)
                    break;
            }
            stack.push(result)
        } else {
            stack.push(token);
        }
    }
    return stack[0];
};
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])