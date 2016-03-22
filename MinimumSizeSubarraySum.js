//Given an array of n positive integers and a positive integer s,
//find the minimal length of a subarray of which the sum ≥ s.
//If there isn't one, return 0 instead.
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if(nums.length==0)
    return 0;
  var p1=0,p2=0,result=nums.length+1,sum=0;
  while(p1<nums.length){
    if(sum<s)
      sum+=nums[p2],p2++;
    else{
      if(result>(p2-p1))
        result=p2-p1;
      sum-=nums[p1],p1++;
    }
    if(p2==nums.length&&sum<s)
      break;
  }
  if(result==nums.length+1)
    return 0;
  return result;
};
console.log(minSubArrayLen(7,[2,3,1,2,4,3]));