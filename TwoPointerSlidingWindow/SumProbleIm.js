/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0;
    let j = 0;
    // let index = -1;
    let arr = Array(haystack.length).fill(-1);
    while (i < haystack.length) {
        if (haystack[i] == needle[j]) {
            arr[j] = i
            i++;
            j++;
        } else {
            i++;
            j = 0;
        }
    }
    console.log(arr)
};

strStr('leetcode', 'leeto')