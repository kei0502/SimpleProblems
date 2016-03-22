//Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
//Find all unique triplets in the array which gives the sum of zero.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length<3)
    return [];
  nums.sort(function(a,b){return a-b;});
  var result=[];
  var i=0,len=nums.length;
  //根据nums[i]找其他两个加起来为-nums[i]
  while(i<len){
    if(nums[i]>0)//防止重复
      break;
    if(i-1>=0&&nums[i]==nums[i-1]) {
      i++;
      continue;
    }
    var p1=i+1,p2=len-1;
    while(p1<p2){
      if(nums[i]+nums[p1]+nums[p2]>0)
        p2--;
      else if(nums[i]+nums[p1]+nums[p2]<0)
        p1++;
      else {
        result.push([nums[i], nums[p1], nums[p2]]);
        while(p1<p2&&nums[p1]==nums[p1+1])//防止重复
          p1++;
        while(p1<p2&&nums[p2]==nums[p2-1])//防止重复
          p2--;
        p1++;
        p2--;
      }
    }
    i++;
  }
  return result;
};
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
//console.log(threeSum([-1,0,1,2,-1,-4]));