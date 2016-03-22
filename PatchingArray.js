//Given a sorted positive integer array nums and an integer n,
// add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array.
//Return the minimum number of patches required.
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
//discuss
var minPatches = function(nums, n) {
  var result=0,i=1,miss=1;
  //假设已有的result个数加起来大于等于miss情况下能完成所有0-miss的数
  while(miss<=n){
    if(i<nums.length&&nums[i]<miss){
      miss=miss+nums[i];
      i++;
    }
    else{
      result++;
      miss+=miss;
    }
  }
  return result;
};
console.log(minPatches([1,3,5],10));