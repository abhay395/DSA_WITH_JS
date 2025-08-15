/**
 * @param {number[]} nums
 * @return {number}
 */
//! Brute Force Solution
// var FindMissingAndRepatingNumber = function(nums) {
//     let repeating = 0;
//     let missingNumber = 0;
//     for(let i = 1;i<nums.length;i++){
//         let numsOfAppears = 0;
//         for(let j = 0; j<nums.length;j++){
//             if(i==nums[j]){
//                 numsOfAppears++;
//             }
//         }
//         console.log(numsOfAppears)
//         if(numsOfAppears==2){
//             repeating=i;
//         }
//         if(numsOfAppears==0){
//             missingNumber=i;
//         }
//     }
//     return [missingNumber,repeating]
// };
// YOu have to work on XOR approach 
//! Best Apporach 
//? Time Complexity O(n) but spaceComplexity O(n)
// var FindMissingAndRepatingNumber = function (nums) {
//     const arr = Array(nums.length + 1).fill(0);
//     let repeating = 0;
//     let missingNumber = 0;
//     for (let i = 0; i < nums.length; i++) {
//         arr[nums[i]]++;
//     }
//     for (let i = 1; i < nums.length; i++) {
//         if (arr[i] == 2) repeating = i;
//         if (arr[i] == 0) missingNumber = i;
//         if (repeating != 0 && missingNumber != 0) {
//             break;
//         }
//     }
//     return [repeating, missingNumber]
// }
// ? Optimal Solution

var FindMissingAndRepatingNumber = function (nums) {
    // S-Sn
    // S2-S2n
    let n = nums.length;
    let Sn = (n * (n + 1)) / 2;
    let S = 0;
    let S2n = (n * (n + 1)*(2 * n + 1)) / 6;
    let S2 = 0;
    for (let i = 0; i < nums.length; i++) {
        S += nums[i];
        S2 += nums[i] * nums[i];
    }
    let val1 = S - Sn;
    let val2 = S2 - S2n;
    val2 = val2 / val1;
    let x = (val2 + val1 )/2;
    let y = x-val1
    return [x , y]
}
console.log(FindMissingAndRepatingNumber([1, 2, 3, 5, 6, 1]))