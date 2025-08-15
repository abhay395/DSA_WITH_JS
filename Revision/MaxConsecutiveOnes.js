/** 
 * @param {Array} nums
 * @return {Array}
 */
function MaxConsectiveOnes(nums) {
    let count = 0;
    let maxCons = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count = 0;
        } else {
            count++;
            maxCons = Math.max(count, maxCons);
        }
    }
    console.log(maxCons)
}

MaxConsectiveOnes([1, 1, 1, 0, 1, 1, 1, 1, 1, 1])