//Given n balloons, indexed from 0 to n-1.
//Each balloon is painted with a number on it represented by array nums.
//You are asked to burst all the balloons.
//If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.
//Here left and right are adjacent indices of i.
//After the burst, the left and right then becomes adjacent.
//Find the maximum coins you can collect by bursting the balloons wisely.
/**
 * @param {number[]} nums
 * @return {number}
 */
//from discuss
//动态规划还要看discuss,我弱爆了orz
var maxCoins = function(nums) {
  if(nums.length==0)
    return 0;
  var n=nums.length+2;
  nums.push(1);
  nums.unshift(1);
  var result=[];
  for(var i=0;i<n;i++){
    result[i]=[];
    for(var j=0;j<n;j++)
      result[i][j]=0;
  }
  for(var i = 2; i < n; i++){
    for(var left = 0; left + i < n; left++){
      var right = left + i;
      for(var j = left+1; j < right; j++){
        result[left][right] = Math.max(result[left][right], result[left][j] + result[j][right] + nums[left]*nums[right]*nums[j]);
      }
    }
  }
  return result[0][n-1];
};
console.log(maxCoins([3, 1, 5, 8]));