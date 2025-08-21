/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // let i = 0;
    // let j = needle.length - 1;
    // while (j < haystack.length) {
    //     let substr = haystack.slice(i, j + 1);
    //     if (substr == needle) {
    //         return i
    //     } else {
    //         i++;
    //         j++;
    //     }
    // }
    // return -1
    if (needle.length === 0) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) return i; // full match found
    }
    return -1;
};

console.log(strStr("sadbutsad", "op"))