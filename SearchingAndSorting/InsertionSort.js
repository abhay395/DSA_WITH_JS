
function InsertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j - 1] > nums[j]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            j--;
        }
    }
    console.log(nums)
}

InsertionSort([4, 1, 25, 8, 9, 6, 2])