

function evalRPN(tokens) {
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
    console.log(stack[0])
}

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
