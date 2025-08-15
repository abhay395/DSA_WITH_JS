function sumOfArrayElement(n,arr){
    if(n==0){
        return arr[0]
    }
    console.log(arr[n])
    let sum  = arr[n]+sumOfArrayElement(n-1,arr)
    return sum
}

console.log(sumOfArrayElement(3,[1,2,3,4]))