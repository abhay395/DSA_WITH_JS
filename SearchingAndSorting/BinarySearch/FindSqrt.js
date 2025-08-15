/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // let ans = 0;//* Normal Way but not optimal 
    // for (let i = 0; i <= x; i++) {
    //     console.log("j")
    //     if (i * i <= x) {
    //         ans = i
    //     } else {
    //         break
    //     }
    // }
    // return ans
    if (x < 2) return x;
    let i = 1;
    let j = x;
    let ans = 1
    while (i < j) {
        let mid = Math.floor((i + j) / 2)
        console.log("j")
        if (mid * mid == x) return mid
        if (mid * mid < x) {
            ans = mid
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    return ans
};
console.log(mySqrt(9))