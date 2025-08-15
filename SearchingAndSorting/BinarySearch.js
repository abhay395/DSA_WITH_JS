
const arr = [1, 2, 3, 5, 6, 9, 10, 11]
let target = 1;
let low = 0;
let highe = arr.length - 1;
let index = -1;
while (low<=highe) {
    let mid = Math.floor((highe+low)/2)
    if (target == arr[mid]) {
        index = mid;
        break;
    }
    if (target < arr[mid]) {
        highe = mid-1;
    }else{
        low = mid+1
    }
    console.log("hello")
}
console.log(arr[index])