//Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
//Return the sum of the three integers.
//You may assume that each input would have exactly one solution.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if(nums.length<3)
    return 0;
  //有序数组
  nums.sort(function(a,b){return a-b;});
  var result=nums[0]+nums[1]+nums[2];
  var i=0,len=nums.length;
  while(i<len){
    if(i-1>=0&&nums[i]==nums[i-1]) {
      i++;
      continue;
    }
    var p1=i+1,p2=len-1;
    while(p1<p2){
      if(Math.abs(nums[i]+nums[p1]+nums[p2]-target)<Math.abs(target-result))
        result=nums[i]+nums[p1]+nums[p2];
      if(nums[i]+nums[p1]+nums[p2]>target)
        p2--;
      else if(nums[i]+nums[p1]+nums[p2]<target)
        p1++;
      else
        return target;
    }
    i++;
  }
  return result;
};
console.log(threeSumClosest([1,1,1,0],10));