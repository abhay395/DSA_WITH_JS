
function sumOfNnumbers(n) {
    if (n == 0) {
        return 0;
    }
    let sum = sumOfNnumbers(n - 1) + n
    return sum
}
console.log(sumOfNnumbers(3))