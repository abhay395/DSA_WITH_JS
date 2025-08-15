/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0) return 0
    let i = 0;
    let j = 1;
    let longest = 0;
    while (j <= s.length) {
        longest = Math.max(j - i, longest)
        if (s.slice(i, j).includes(s[j])) {
            i = j
        }
        j++;
    }
    return longest
};

console.log(lengthOfLongestSubstring("dvdf"))