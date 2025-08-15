/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let largestOddNum = "";
    // console.log(Number(num[0]) % 2)
    console.log(largestOddNum)
    for (let i = 1; i <= num.length; i++) {
        if ((Number(num[i-1]) % 2) != 0) {
            largestOddNum = num.slice(0, i)
        }
    }
    console.log(largestOddNum)
};
largestOddNumber("35427")