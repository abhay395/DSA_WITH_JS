/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let length = digits.length;
    for(let i = length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0
    }
    digits.unshift(1)
    return digits
}

console.log(plusOne([9]))