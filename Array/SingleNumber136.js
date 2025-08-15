var singleNumber = function (nums) {
    // const map = new Map();
    const hasArr = new Array(10000).fill(0);
    for (let val of nums) {
        hasArr[val]++
    }
    for (let i = 0; i < hasArr.length; i++) {
        if (hasArr[i] == 1) return i
    }
    // for(let i = 0; i<nums.length;i++){
    //     if(map.has(nums[i])){
    //         map.set(nums[i],map.get(nums[i])+1)
    //     }else{
    //         map.set(nums[i],1);
    //     }
    // }
    // for(let [key ,value] of map){
    //     if(value==1) return key
    // }
};
// var singleNumber = function (nums) {
//     let missingNum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         missingNum ^= nums[i]
//     }
//     return missingNum
// };
console.log(singleNumber([2, 2, 1, 1, 3,3,4]));