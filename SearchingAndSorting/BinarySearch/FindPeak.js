/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        console.log(i, j)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid
        } else if (arr[mid] < arr[mid - 1]) {
            j = mid - 1;
        } else {
            i = mid + 1
        }
    }
    return i
};

peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90])