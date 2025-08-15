/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0;
    let j = needle.length - 1;
    while (j < haystack.length) {
        let substr = haystack.slice(i, j + 1);
        if (substr == needle) {
            return i
        } else {
            i++;
            j++;
        }
    }
    return -1
};

console.log(strStr("sadbutsad", "op"))