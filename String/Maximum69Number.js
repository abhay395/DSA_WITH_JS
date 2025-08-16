/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    // let n = String(num).split('')
    // for (let i = 0; i < n.length; i++) {
    //     let temp = n;
    //     if (temp[i] == '6') {
    //         temp[i] = '9'
    //         temp = Number(temp.join(''))
    //         if (temp > num) return temp
    //     }
    // }
    // return num
    let digit = [];
    let temp = num;
    while (temp > 0) {
        let lastDigit = temp % 10;
        digit.push(lastDigit)
        temp = Math.trunc(temp / 10)
    }
    digit.reverse()
    for (let i = 0; i < digit.length; i++) {
        // let maxNum = digit
        if (digit[i] === 6) {
            digit[i] = 9
        }
    }
    let result = 0;
    for (let d of digit) {
        result = d + result * 10
    }
    return result
};
maximum69Number(69999)