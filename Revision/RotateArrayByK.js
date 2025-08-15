
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
function rotateArray(nums, k) {
    let i = 0;
    let j = nums.length - k-1;
    reverse(nums, i, j)
    reverse(nums,j+1,nums.length-1)
    console.log(nums)
    reverse(nums,0,nums.length-1)
    console.log(nums)
}
rotateArray([1,2,3,4,5,6,7],3)