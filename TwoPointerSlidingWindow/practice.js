

var strStr = function (haystack = '', needle = '') {
    let left = 0;
    let right = needle.length;
    while (right < haystack.length) {
        let subStr = haystack.slice(left, right);
        if (subStr == needle) {
            return left
        }
        left++;
        right++;
    }
    return -1
};

console.log(strStr('leetcode', 'leeto'))