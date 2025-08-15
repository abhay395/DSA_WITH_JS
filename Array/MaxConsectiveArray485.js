/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let acc = 0;
    let maxCon = 0;
    for(let i = 0 ;i<nums.length;i++){
        if(nums[i]==0){
            if(maxCon<acc)maxCon = acc;
            acc=0;
        }else{
            acc++;
        }
    }
    return Math.max(acc,maxCon)
}
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))