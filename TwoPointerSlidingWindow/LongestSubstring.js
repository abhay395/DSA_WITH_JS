/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // let longest = 0;
    // let left = 0;
    // let hashSet = new Set();
    // for (let right = 0; right < s.length; right++) {
    //     while (hashSet.has(s[right])) {
    //         hashSet.delete(s[left])
    //         left++;
    //     }
    //     hashSet.add(s[right]);
    //     longest = Math.max(right - left + 1, longest);
    // }
    // return longest
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let str = ''
        for (let j = i; j < s.length; j++) {
            if (str.includes(s[j])) {
                break;
            }
            str += s[j]
        }
        if (longest.length < str.length) longest = str
    }
    return longest.length
};
lengthOfLongestSubstring("pwwekc")