

/**
 * @param {Array} nums
 * @return {number}
 */

function findKclosetElement(arr = [], k, x) {
    // let distance = arr.map((el) => [el, Math.abs(x - el)]) // step 1 create arr with distance
    // console.log(distance)
    // distance = distance.sort((a, b) => {
    //     if (a[1] == b[1]) {
    //         return a[0] - b[0]
    //     }
    //     else return a[1] - b[1]
    // })
    // let closest = distance.slice(0,k).map((el)=>el[0]).sort((a,b)=>a-b)
    // console.log(closest)
    // let left = 0;
    // let right = arr.length - 1
    // while (right - left + 1 > k) {
    //     if ((arr[left] - x) > arr[right] - x) {
    //         left--
    //     } else {
    //         right--
    //     }
    // }
    // return arr.slice(left, right + 1)
    let low = 0;
    let highe = arr.length - k
    while (low < highe) {
        let mid = low + Math.floor((highe - low) / 2);
        console.log(arr[mid])
        if (Math.abs(arr[mid] - x) > Math.abs(arr[mid + k] - x)) {
            low = mid + 1
        } else {
            highe = mid
        }
    }
    return arr.slice(low, low + k)
}

console.log(findKclosetElement([1, 1, 2, 3, 4, 5, 6, 7, 8], 4, 5))
// console.log(searchRotetedArray([7, 8, 9, 1, 2, 3, 4, 5, 6], 1))