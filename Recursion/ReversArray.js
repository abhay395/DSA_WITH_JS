
/**
 * Recursively reverses an array.
 *
 * @param {number} n - The current index to process in the array.
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} The reversed array.
 */
function ReverseArray(start, end, arr) {
    if (start > end) {
        return arr;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp
    return ReverseArray(start + 1, end - 1, arr)
}
console.log(ReverseArray(0, 5, [1, 2, 3, 4, 5, 2]))