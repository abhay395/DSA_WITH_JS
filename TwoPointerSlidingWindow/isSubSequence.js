/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // let count = 0;
    // let i = 0;
    // let j = 0;
    // while (i < s.length) {/// my way
    //     while (t[j] != s[i] && j < t.length) j++;
    //     if (s[i] == t[j]) {
    //         count++;
    //         i++;
    //     } else {
    //         return false
    //     }
    //     j++;
    // }
    // if (count == s.length) {
    //     return true
    // }else{
    //     return false
    // }
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) { // easier way 
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }
    return i == s.length

};

console.log(isSubsequence("abc", "ahbgdc"))