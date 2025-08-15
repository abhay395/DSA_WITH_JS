
function sumOfAlMembersOfArray(arr, i) {
    if (i === arr.length-1) {
        return arr[i]
    }
    let sum = arr[i] + sumOfAlMembersOfArray(arr, i + 1);
    return sum
}
console.log(sumOfAlMembersOfArray([1, 1, 2, 3, 4], 0))
