
function ReveresArr(nums, i, j) {
    if (i > j) return nums;
    [nums[i], nums[j]] = [nums[j], nums[i]]
    return ReveresArr(nums, i + 1, j - 1)
}

console.log(ReveresArr([1, 2, 3, 4, 5, 8], 0, 5))