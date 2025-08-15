/**
 * @param {number[]} nums
 * @return {boolean}
 */
var practice = function (nums, low, highe) {
  // console.log(nums)
  if (low == highe || low > highe) {
    return;
  }
  let mid = Math.floor((low + highe) / 2)
  practice(nums, low, mid)
  practice(nums, mid + 1, highe);
  Merge(nums, low, mid, highe)
};
function Merge(arr, low, mid, highe) {
  let i = low;
  let j = mid + 1;
  let temp = [];
  while (i <= mid && j <= highe) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(arr[i]);
    i++
  }
  while (j <= highe) {
    temp.push(arr[j]);
    j++
  }
  i = 0;
  let k = low;
  while (k <= highe) {
    arr[k] = temp[i]
    k++;
    i++;
  }
}
let arr = [4, 25, 9, 1, 5, 6, 7]
practice(arr, 0, arr.length - 1)
console.log(arr);
// console.log(practice([4, 25, 9, 1, 5, 6, 7]))