/**
 * @param {number[]} nums
 * @return {number}
 */
var resverseString = function (str) {
    let i = 0;
    let j = str.length-1;
    console.log(j)
    while(i<j){
        let temp = str[i];
        str[i]=str[j];
        str[j] = temp;
        i++;
        j--;
    }
    console.log(str)
};
resverseString(["H","L","o",'w'])