/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//! Brute Force Solution 
// var searchRange = function (nums, target) {
//     let first = -1;
//     let second = -1;
//     if(nums.length==1 && nums[0]==target){
//         return [0,0];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target && first==-1) {
//             first = i;
//         }
//         if ((nums[i+1] == target && nums[i + 2] != target) || (nums[i+1] == target && (i + 2)===nums.length)) {
//             second = i+1
//             break;
//         }
//     }
//     if(first==-1 && second!=-1){
//         return [second,second]
//     }
//     if(second==-1 && first!=-1){
//         return [first,first]
//     }
//     return [first,second]
// };

// ?Optimal Soultion
var searchRange = function (nums, target) {
    let start = 0;
    let end = arr.length - 1;
    let lowerBound = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] >= target) {
            lowerBound = mid;
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    if (lowerBound == -1 || arr[lowerBound] != target) return [-1, -1];
    let upperBound = -1;
    start = 0;
    end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > target) {
            upperBound = mid;
            end = mid - 1;
            // console.log(end)
        } else {
            console.log(start)
            start = mid + 1
        }
    }
    console.log(upperBound)
    if (upperBound == -1) {
        return [lowerBound, arr.length - 1]
    }
    return [lowerBound, upperBound - 1]
};

// var searchRange = function (nums, target) {
//     const findBound = (isFirst) => {
//         let low = 0;
//         let high = nums.length - 1;
//         let bound = -1;

//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             if (nums[mid] === target) {
//                 bound = mid;
//                 if (isFirst) {
//                     high = mid - 1; // Keep searching left
//                 } else {
//                     low = mid + 1;  // Keep searching right
//                 }
//             } else if (nums[mid] < target) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }

//         return bound;
//     };

//     const first = findBound(true);
//     if (first === -1) return [-1, -1];
//     const last = findBound(false);

//     return [first, last];
// };

console.log(searchRange([1, 2, 3, 3, 3, 4], 3))