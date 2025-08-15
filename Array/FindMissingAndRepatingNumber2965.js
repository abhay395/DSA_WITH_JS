/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// var findMissingAndRepeatedValues = function(grid) {
//     let n = grid.length;
//     let S = 0
//     let Sn = 0;
//     let S2 = 0;
//     let S2n = 0;
//     let xor2 = 0;
//     let k = 0;
//     for(let i = 0;i<n;i++){
//         for(let j = 0 ;j<n;j++){
//            S += grid[i][j];
//            S2+= grid[i][j]*grid[i][j];
//            k++;
//         }
//     }
//     // S-Sn 
//     // S2-S2n;
//     Sn = Math.round((k*(k+1))/2);
//     S2n = Math.round((k*(k+1)*(2*k+1))/6)
//     let val1 = S-Sn;
//     let val2 = S2-S2n;
//     console.log(k)
//     console.log(S2 ,S2n)
//     console.log(val1,val2)
//     val2 = Math.round(val2/val1);
//     console.log(val2+val1)
//     let x = (val2+val1)/2;
//     let y = val2-x
//     return [x,y]
// };
var findMissingAndRepeatedValues = function (grid) {
    let map = new Map();
    let repeating = -1;
    let S = 0;
    let n = grid.length
    let k = n * n;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (map.has(grid[i][j])) {
                repeating = grid[i][j]
            } else {
                map.set(grid[i][j], 1);
            }
            S += grid[i][j]
        }
    }
    let Sn = (k * (k + 1)) / 2
    let val1 = S - Sn;
    let missingValue = repeating - val1
    console.log(val1)

    return [repeating, missingValue]
};
var findMissingAndRepeatedValues = function (grid) {
    let xor1 = 0;
    let xor2=0;
    let k = 1;
    let n = grid.length
    let S = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(k , grid[i][j])
            xor1^= grid[i][j]
            xor2^=k
            k++;
            S += grid[i][j]
        }
    }
    console.log(xor1^xor2 ,xor1 ,xor2)
    // xor1^=(n*n);
    let Sn = (n * n * (n * n + 1)) / 2
    let val1 = S - Sn;
    let missingValue = xor1 - val1
    // console.log(val1)
    // console.log(xor1^(n*n),n*n ,xor1)
    // console.log(val1)

    return [xor1, missingValue]
};


console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))