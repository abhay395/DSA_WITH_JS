
/** 
 * @param {Array}nums
 * @return {void}
 */
function PluseOne(nums) {
    let len = nums.length;
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] < 9) {
            nums[i]++;
            console.log(nums)
            return nums
        }
        nums[i]=0;
    }
    nums.unshift(1);
    return nums
}
console.log(PluseOne([9,9,9,9]))