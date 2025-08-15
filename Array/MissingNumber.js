/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    for(let i = 0; i<nums.length;i++){
      sum = nums[i]+sum;
    }
    let actualSum = (nums.length*(nums.length+1))/2

    return actualSum-sum
};
// YOu have to work on XOR approach 