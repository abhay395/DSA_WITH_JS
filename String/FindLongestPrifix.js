/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let lenSingleSr = strs[0].length;
    let lenStr = strs.length;
    let cr = ''
    outer: for (let i = 0; i < lenSingleSr; i++) {
        let char = strs[0][i];
        for (let j = 1; j < lenStr; j++) {
            if (char != strs[j][i]) {
                break outer;
            }
        }
        cr += char;
    }
    return cr;
};
console.log(longestCommonPrefix(["dog","racecar","car"]))