//Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//For example, Given [100, 4, 200, 1, 3, 2],
//The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
//Your algorithm should run in O(n) complexity.
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length==0)
    return 0;
  nums.sort(function(a,b){return a-b;});//数字升序
  var count=1,max=1;
  for(var i=1,len=nums.length;i<len;i++){
    if(nums[i]==nums[i-1])
      continue;
    if(nums[i]==nums[i-1]+1)
      count++;
    else {
      if(max<count)
        max=count;
      count = 1;
    }
  }
  if(max<count)
    max=count;
  return max;
};
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));