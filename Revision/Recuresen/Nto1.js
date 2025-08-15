function fac(N) {
    if (N == 0 || N == 1) {
        return 1;
    }
    let fec = fac(N - 1) * N
    return fec
}
console.log(fac(5))