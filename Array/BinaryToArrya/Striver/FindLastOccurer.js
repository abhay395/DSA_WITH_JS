
function FindLastOccurence(nums, target) {

    // for (let i = 0; i < arr.length ; i++) {
    //     if ((arr[i] == target && arr[i + 1] != target) || (arr[i] == target && arr[i + 1] == undefined)) {
    //         return i;
    //     }
    // }
    let temp = [-1, -1]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target && temp[0]==-1) {
            temp[0] = i;
        }
        // if ((nums[i+1] == target && nums[i + 2] != target) || (nums[i+1] == target && nums[i + 2] === undefined)) {
        //     temp[1] = i+1
        //     return temp
        // }
    }
    return temp
    // return [-1, -1]
    // return -1;
}

console.log(FindLastOccurence([3,3,3],3))