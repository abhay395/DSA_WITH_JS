/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let arr = [];
    // for (let i = 0; i < height.length; i++) { //!brute force solution 
    //     for (let j = i; j < height.length; j++) {
    //         if (height[i] > height[j]) {
    //             arr.push((j - i) * height[j])
    //         } else {
    //             arr.push((j - i) * height[i])
    //         }
    //     }
    // }
    // let maxContain = 0;
    // for (let el of arr) {
    //     if (maxContain < el) {
    //         maxContain = el
    //     }
    // }
    // return maxContain
    let i = 0;
    let j = height.length - 1;
    let atmostContain = 0;
    while (i < j) {
        if (height[i] < height[j]) {
            atmostContain = Math.max((j - i) * height[i], atmostContain);
            i++;
        } else {
            atmostContain = Math.max((j - i) * height[j], atmostContain)
            j--;
        }
    }
    return atmostContain
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])