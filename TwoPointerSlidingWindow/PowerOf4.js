/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n == 1 || n == 4) return true
    if (n < 4) return false
    let i = 4
    while (i < n) {
        i = i * 4
        if (i == n) return true
    }
    return false
}