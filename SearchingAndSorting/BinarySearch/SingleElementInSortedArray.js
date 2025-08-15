


function findSingleElementInsSortedArray(arr = []) {
    // let i = 0;
    // let j = arr.length - 1;
    // while (i < j) {
    //     let mid = i + Math.floor((j - i) / 2);
    //     // console.log(mid)
    //     if (mid % 2 == 0) {
    //         if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
    //             console.log(arr[mid])
    //             break
    //         }
    //         if (arr[mid] == arr[mid + 1]) {
    //             i = mid + 1;
    //         } else {
    //             j = mid - 1
    //         }
    //     } else {
    //         if (arr[mid] == arr[mid - 1]) {
    //             i = mid + 1;
    //         } else {
    //             j = mid - 1
    //         }
    //     }
    // }
    // console.log(arr[i])
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let mid = i + Math.floor((j - i) / 2);

        // Ensure mid is even for pairing check
        if (mid % 2 === 1) mid--;

        // Check if the pair starting at mid is valid
        if (arr[mid] === arr[mid + 1]) {
            // Single element is after this pair
            i = mid + 2;
        } else {
            // Single element is before or at mid
            j = mid;
        }
    }

    return arr[i];
}
findSingleElementInsSortedArray([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6])