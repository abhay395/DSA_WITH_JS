//! Better Approach 
// function FindSecondLargest(nums) {
//     let small = Number.MAX_VALUE;
//     let large = Number.MIN_VALUE;
//     for (let i = 0; i < nums.length; i++) {
//         small = Math.min(small, nums[i]);
//         large = Math.max(large, nums[i]);
//     }
//     let secondLarges = Number.MIN_VALUE;
//     let secondsmall = Number.MAX_VALUE
//     for (let i = 0; i < nums.length; i++) {
//         if (secondsmall > nums[i] && nums[i] !== small) {
//             // console.log(nums[i] , small)
//             secondsmall = nums[i];
//         }
//         if (secondLarges < nums[i] && nums[i] != large) {
//             secondLarges = nums[i];
//         }
//     }
//     console.log(large,small)
//     return [secondLarges,secondsmall]
//     // let secondLagest = nums[]
// }
//? Optimal Approach 
function FindSecondLargest(nums) {
    let small = Number.MAX_VALUE;
    let large = Number.MIN_VALUE;
    let secondLarges = Number.MIN_VALUE;
    let secondsmall = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        if (small >= nums[i]) {
            secondsmall = small;
            small = nums[i];
            console.log(nums[i], secondsmall ,"Small")
        }
        else if(nums[i]<secondsmall){
            secondsmall = nums[i]
        }
        if (large <= nums[i]) {
            secondLarges = large;
            large = nums[i];
        }
        else if(nums[i]>secondLarges){
            secondLarges = nums[i]
        }
    }
    console.log(large, small)
    return [secondLarges, secondsmall]
    // let secondLagest = nums[]
}

console.log(FindSecondLargest([1, 2, 5, 6, 7, 82, 2,9]))