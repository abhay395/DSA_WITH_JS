function SumOfFirstNnumber(n) {
    if (n == 0) {
        return n;
    }
    let sum = n + SumOfFirstNnumber(n - 1)
    return sum;
}

console.log(SumOfFirstNnumber(3))