// function FindLowerBound(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>=target){
//             return i;
//         }
//     }
// }
function FindLowerBound(nums, target) {
    let start = 0;
    let end = nums.length;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] >= target) {
            ans = mid;
            end = mid-1
        } else if (nums[mid] < target) {
            start = mid + 1;
        }
    }
    return ans
}
console.log(FindLowerBound([1, 2, 3, 5, 5, 8, 9], 4))