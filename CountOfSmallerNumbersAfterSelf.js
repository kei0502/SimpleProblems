//You are given an integer array nums and you have to return a new counts array.
//The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//果然TLE了啊_(:зゝ∠)_
//var countSmaller = function (nums) {
//  if (nums.length == 0)
//    return [];
//  var result=[];
//  for(var i=0,len=nums.length;i<len;i++){
//    result[i]=find(nums.slice(i,len),nums[i]);
//  }
//  return result;
//};
//var find = function(nums,num) {
//  return nums.filter(function(x){return x<num;}).length;
//};

//discuss BinarySearchTree
var countSmaller = function (nums) {
  if (nums.length == 0)
    return [];
  var tree = new BSTree(), result = [];
  for (var i = nums.length-1; i >=0; i--) {
     result[i]=tree.insert(nums[i], tree.root);
  }
  return result;
};
function BSTNode(val) {
  this.val = val;
  this.left = this.right = null;
  this.leftCount = 0;
  this.count = 1;
}
function BSTree() {
  this.root = null;
}
BSTree.prototype.insert = function (val, node) {
  if (!this.root) {
    this.root = new BSTNode(val);
    return 0;
  }
  if (val == node.val) {
    node.count += 1;
    return node.leftCount;
  }
  else if (val < node.val) {
    node.leftCount += 1;

    if (!node.left) {
      node.left = new BSTNode(val);
      console.log(val,node.leftCount);
      return 0;
    }
    return this.insert(val, node.left);
  }
  else {
    if (!node.right) {
      node.right = new BSTNode(val);
      return node.count + node.leftCount;
    }
    return node.count + node.leftCount + this.insert(val, node.right);
  }
};

console.log(countSmaller([5, 2, 6, 1]));