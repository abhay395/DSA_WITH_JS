/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // let result = 0;
    // for (let i = 0; i < s.length; i++) {// extreame Brute force
    //     for (let j = i; j < s.length; j++) {
    //         let str = s.slice(i, j + 1);
    //         let freq = {}
    //         for (let char of str) {
    //             freq[char] = (freq[char] || 0) + 1
    //         }
    //         let maxCount = 0;
    //         for (let key in freq) {
    //             maxCount = Math.max(freq[key], maxCount)
    //         }
    //         let length = j - i + 1
    //         let replacemnt = length - maxCount
    //         if (replacemnt <= k) {
    //             result = Math.max(result, length)
    //         }
    //     }
    // }
    // return result
    let left = 0;
    let maxCount = 0;
    let result = 0;
    let freq = {};
    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        freq[ch] = (freq[ch] || 0) + 1;
        maxCount = Math.max(maxCount, freq[ch])
        while ((right - left + 1) - maxCount > k) {
            freq[s[left]]--
            left++;
        }
        result = Math.max(result, right - left + 1)
    }
    console.log(result)
};

characterReplacement("AAABCA", 1)