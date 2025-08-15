

function removeElement(nums,val){
    let k = 0;
    let len = nums.length;
    for(let i = 0;i<len;i++){
        if(nums[i]!=val){
            [nums[i],nums[k]] = [nums[k],nums[i]];
            k++
        }
    }
    console.log(nums)
    return k
}

console.log(removeElement([0,1,2,2,3,0,4,2],2))