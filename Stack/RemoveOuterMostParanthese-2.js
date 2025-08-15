/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let result = ''
    for (let char of s) {
        if (char == "(") {
            if (stack.length > 0) result += char
            stack.push(char);
        } else {
            stack.pop();
            if (stack.length > 0) result += char
        }
    }
    console.log(result)
}


removeOuterParentheses("(())(())")