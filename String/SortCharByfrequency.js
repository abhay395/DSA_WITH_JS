/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map();
    for (let char of s) {
        // if(map.has(char)){
        map.set(char, (map.get(char) || 0) + 1);
        // }
    }
    console.log(map)
    // let news = ''
    // for(let [key,value] of map){

    // }
};
frequencySort("trrree")