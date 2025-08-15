function BinarySearch(arr, low, highe, target) {
    if (low < highe) {
        let mid = Math.floor((low + highe) / 2)
        if (target == arr[mid]) return mid;
        if (target < arr[mid]) return BinarySearch(arr, low, mid - 1, target);
        else return BinarySearch(arr, mid + 1, highe, target);
    }
    return -1;
}
let arr = [1, 2, 5, 8, 9, 89]
let index = BinarySearch(arr, 0, arr.length - 1, 7)
console.log(index)