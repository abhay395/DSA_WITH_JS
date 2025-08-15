var isPalindrome = function (s) {
    s = s.toLowerCase();
    clean = ''
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let char = s[i];
        if (char >= "a" && char <= "z" || char >= "0" && char <= "9") clean += char;
    }
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let leftchar = s[left]
        let rightchar = s[right]
        if ((leftchar >= "a" && leftchar <= "z" || leftchar >= "0" && leftchar <= "9") && (rightchar >= "a" && rightchar <= "z" || rightchar >= "0" && rightchar <= "9")) {
            if (leftchar != rightchar) {
                console.log("hell")
                return false;
            }
            console.log(leftchar, rightchar)
        };
        left++;
        right--;
    }
    return true;
};
var isPalindrome = function (i, s) {
    if (i >= s.length / 2) return true;
    if(s[i]!=s[s.length-1-i]) return false;
    return isPalindrome(i+1,s)
};
console.log(isPalindrome(0, "ABCDCB"))