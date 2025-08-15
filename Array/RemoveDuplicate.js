/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if(nums.length==0) return 0;
    let k =1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=nums[k-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    
    console.log(nums)
    return k
};
console.log(removeDuplicates([1,1,2,3,3,4,5,5]))