/**
 * @param {number[]} nums
 * @return {boolean}
 */
var practice = function(nums) {
  // let k  = 0;
   if(nums.length==0)return 0;
    let k = 1 ; 
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!=nums[k-1]){
          console.log(nums)
            nums[k]=nums[i];
            k++;
        }
    }
    console.log(nums)
    return k
};
console.log(practice([0,1,1,2,2,3]))