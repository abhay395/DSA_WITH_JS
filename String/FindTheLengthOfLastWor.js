/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let l = s.length;
    // let count = 1;
     s = s.trim().split(" ")
     return s[s.length-1]
    // for(let i = l-1;i>0;i--){
    //     let charCode = s[i].charCodeAt(0);
    //     // console.log(charCode)
    //     if((charCode>=97 && charCode<=122)||(charCode>=97 && charCode<=122)){
    //         count++;
    //     }else if(count>1){
    //         console.log(charCode)
    //         return count
    //     }
    // }
    // return count
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))