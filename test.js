/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let xor1 = 0;
  let xor2 = 0;
  let k = 0;
  let n = grid.length
  let S = 0;
  // console.log(n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      xor1 ^= grid[i][j]
      xor2 ^= k;
      console.log(k,grid[i][j]);
      // console.log;
      k++;
      S += grid[i][j]
    }
  }
   xor2 ^= k;
   console.log(k)
  console.log(xor1, xor2, xor1 ^ xor2)
  // let Sn = (n*n*(n*n+1))/2
  // let val1 = S-Sn;
  // let missingValue = xor1-val1
  // console.log(val1)

  // return [xor1, missingValue]
};
console.log(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]]))