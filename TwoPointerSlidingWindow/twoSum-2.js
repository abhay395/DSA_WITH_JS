/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1
    // while (i < j) {
    //     console.log(numbers[i]+numbers[j])
    //     if ((numbers[i] + numbers[j]) == target) {
    //         return [i, j];
    //     } else if ((numbers[i] + numbers[j]) < target) {
    //         i++;
    //     } else {
    //         j--
    //     }
    // }
    while (i < j) {
        let mid = i + Math.floor((j - i) / 2);
        if (numbers[mid] > target) {
            j = mid;
        }
        let sum = numbers[i] + numbers[j]
        if (sum == target) {
            return [i + 1, j + 1]
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
};

console.log(twoSum([],9))