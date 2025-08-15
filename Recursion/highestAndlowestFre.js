/**
 * Recursively reverses an array.
 *
 * @param {number} n - The current index to process in the array.
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} The reversed array.
 */
function highestAndLowestFre(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let k = map.get(arr[i]) + 1
            map.set(arr[i], k);
        } else {
            map.set(arr[i], 1)
        }
    }
    let countforMax = 0;
    let countforMin = Infinity;
    let ele1 = -1
    let ele2 = -1
    for (let [key, value] of map) {
        if (countforMax < value) { 
            countforMax = value
            ele1 = key;
        }
        if(countforMin>value){
            countforMin = value;
            ele2 = key;
        }
    }
    console.log(ele1,ele2)
}
highestAndLowestFre([2, 2, 5, 5, 5, 9])