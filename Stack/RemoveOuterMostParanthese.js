/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    // let result = ''
    // let temp = ''
    // let count = 0
    // for (let char of s) { //? use Extra temp var 
    //     if (char == "(") {
    //         temp += char;
    //         count++;
    //     } else {
    //         temp += char;
    //         count--;
    //     }
    //     if (count == 0) {
    //         console.log(temp)
    //         result += temp.slice(1, temp.length-1);
    //         console.log(result)
    //         temp = "";
    //     }
    // }
    // return result 
    let result = '';
    let count = 0;
    for (let char of s) {
        if (char == "(") {
            if (count > 0) result += char;
            count++;
        } else {
            count--;
            if (count > 0) result += char
        }
    }
    console.log(result)
}


removeOuterParentheses("(())(())")