

/** 
 * @param {Array} nums
 * @return {Array}
 */
function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let min = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[min] > nums[j]) i = j
        }
        [nums[i],nums[min]] = [nums[min],nums[i]]
    }
    console.log(nums)
}

selectionSort([1, 4, 2, 3, 1, 4, 5])