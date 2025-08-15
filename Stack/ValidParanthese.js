/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    // if (s[0] == ")" || s[0] == "}" || s[0] == "]") {//? is Also a Good Way
    //     return false;
    // }
    // let map = new Map();
    // map.set("(", ")")
    // map.set("{", "}")
    // map.set("[", "]")
    // let stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == map.get(stack[stack.length - 1])) {
    //         stack.pop();
    //     } else {
    //         stack.push(s[i]);
    //     }
    // }
    // console.log(stack)
    let map = new Map([
        [')', "("],
        ['}', "{"],
        [']', "["]
    ])
    let stack = [];
    for (let char of s) {
        if (map.has(char)) {
            if (stack[stack.length - 1] == map.get(char)) {
                stack.pop();
            } else return false
        } else {
            stack.push(char)
        }
    }
    if (stack.length == 0) return true
    else return false

};
console.log(isValid("([{})"))