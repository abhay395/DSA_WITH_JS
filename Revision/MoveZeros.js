
/** 
 * @param {Array} nums
 * @return {Array}
 */
function MoveZeros(nums) {
    let k = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!=0){
            [nums[i],nums[k]] = [nums[k],nums[i]];
            k++;
        }
    }
    console.log(nums)
}
MoveZeros([0,1,0,2,3,12])