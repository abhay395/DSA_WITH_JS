


const searchRange = function (nums = [], target) {
    // let i = 0;
    // let j = nums.length - 1;
    // let result = new Array(2).fill(-1)
    // while (i <= j) {
    //     let mid = i + Math.floor((j - i) / 2);
    //     if (nums[mid] == target) {
    //         if (nums[mid] != nums[mid - 1]) {
    //             result[0] = mid;
    //             if(result[1]==-1) result[1] = mid;
    //             i = mid + 1
    //         } else if (nums[mid] != nums[mid + 1]) {
    //             result[1] = mid;
    //             if (result[0] == -1) result[0] = mid;
    //             j = mid - 1
    //         }
    //     } else if (nums[mid] > target) {
    //         j = mid - 1
    //     } else {
    //         i = mid + 1
    //     }
    // }
    // console.log(result)
    let i = 0;
    let j = nums.length - 1
    let lowwerBound = -1;
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if (nums[mid] >= target) {
            lowwerBound = mid;
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    if (lowwerBound == -1) return [-1, -1];
    let upperBound = -1
    i = 0;
    j = nums.length - 1
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2)
        if (nums[mid] > target) {
            upperBound = mid;
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    console.log(lowwerBound, upperBound)
    if (upperBound == -1) return [lowwerBound, nums.length - 1];
    return [lowwerBound, upperBound - 1];
}

searchRange([5, 7, 7, 8, 8, 10], 8)