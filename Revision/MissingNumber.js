
/** 
 * @param {Array} nums
 * @return {Array}
 */
function MissingNumber(nums) {
    // let len = nums.length;//? Hash Map approach
    // let hashArr = new Array(len + 1).fill(0);
    // for (let item of nums) {
    //     if (item != 0) hashArr[item]++
    // }
    // for (let i = 1; i < hashArr.length; i++) {
    //     if (hashArr[i] == 0) {
    //         console.log(i)
    //         return;
    //     }
    // }
    // let miss = 0;//? XOR APPROACH
    // for(let i = 1;i<=nums.length;i++){
    //     miss ^= nums[i-1]^i
    // }
    // console.log(miss)
}
MissingNumber([1,0,3])