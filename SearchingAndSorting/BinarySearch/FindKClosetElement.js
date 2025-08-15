

function findKClosetElement(arr = [], k, x) {
    // let distance = arr.map((el) => [el, Math.abs(x - el)]) //* Brute Force Solution 
    // distance = distance.sort((a, b) => {
    //     if (a[1] == b[1]) {
    //         return a[0] - b[0]
    //     } else {
    //         return a[1] - b[1]
    //     }
    // })
    // let closest = distance.slice(0, k).map((el) => el[0])
    // closest = closest.sort((a, b) => a - b)
    // console.log(closest)
    // return closest
    // let left = 0; // * two Pointer shirnking window solution 
    // let right = arr.length - 1;
    // while (right - left + 1 > k) {
    //     if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
    //         left++;
    //     } else {
    //         right--;
    //     }
    // }
    // let result = arr.slice(left, right + 1)
    // return result
    let left = 0;
    let right = arr.length - k;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        console.log(arr[left], arr[mid], arr[mid + k])

        if (x - arr[mid] > arr[mid + k] - x) {
            // Shift window right
            left = mid + 1;
        } else {
            // Shift window left (or stay)
            right = mid;
        }
    }
    console.log(arr.slice(left, left + k))
}

findKClosetElement([1, 1, 2, 2, 2, 2, 2, 3, 3], 3, 3)