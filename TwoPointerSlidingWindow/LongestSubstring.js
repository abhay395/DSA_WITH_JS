/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let left = 0;
    let hashSet = new Set();
    for (let right = 0; right < s.length; right++) {
        while (hashSet.has(s[right])) {
            hashSet.delete(s[left])
            left++;
        }
        hashSet.add(s[right]);
        longest = Math.max(right - left + 1, longest);
    }
    return longest
    // let longest = -1; //! brute force
    // for (let i = 0; i < s.length; i++) {
    //     let set = new Set();
    //     for (let j = i; j < s.length; j++) {
    //         if (set.has(s[j])) {
    //             break
    //         }
    //         longest = Math.max(j - i + 1, longest)
    //         set.add(s[j])
    //     }

    // }
    // console.log(longest)
    // return longest
};
lengthOfLongestSubstring("abca")