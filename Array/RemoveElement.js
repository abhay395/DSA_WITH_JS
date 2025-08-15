/**
 * @param {number[]} nums
 * @return {number}
 */
var removeElement = function (nums,val) {
    if(nums.length==0) return 0;
    let k =0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=val){
            nums[k]=nums[i]
            k++;
        }
    }
    console.log(nums)
    return k
};
console.log(removeElement([1,1,2,2,3,4,5,5],2))