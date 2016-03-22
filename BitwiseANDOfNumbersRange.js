//Given a range [m, n] where 0 <= m <= n <= 2147483647,
// return the bitwise AND of all numbers in this range, inclusive.
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//各种TLE,还是看的discuss
var rangeBitwiseAnd = function(m, n) {
  var count = 0;
  while(m != n) {
    m >>= 1;
    n >>= 1;
    count++;
  }
  return m << count;
};
console.log(rangeBitwiseAnd(9999,123333));
console.log(rangeBitwiseAnd(87,109));