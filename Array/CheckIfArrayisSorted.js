/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0 ; 
    for(let i = 1;i<nums.length;i++){
        console.log(nums[i-1],nums[i])
        if(nums[i-1]>nums[i]){
            count+=1
        }
    }
    // console.log(count)
    if(nums[0]<nums[nums.length-1])count++;
    if(count<=1) return true ;
    else return false ;
};
console.log(check([3,4,5,1,2]))