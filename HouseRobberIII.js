//The thief has found himself a new place for his thievery again.
//There is only one entrance to this area, called the "root."
//Besides the root, each house has one and only one parent house.
//After a tour, the smart thief realized that "all houses in this place forms a binary tree".
//It will automatically contact the police if two directly-linked houses were broken into on the same night.
//Determine the maximum amount of money the thief can rob tonight without alerting the police.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//discuss
var rob = function (root) {
  var res=robSub(root);
  return Math.max(res[0],res[1]);
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
//返回[],[0]表示不选当前node（即选node.left,node.right）,[1]表示选当前node
var robSub = function(node){
  if(!node)
    return [0,0];
  var left=robSub(node.left),right=robSub(node.right);
  var res=[];
  //不选择当前node
  res[0]=Math.max(left[0],left[1])+Math.max(right[0],right[1]);
  //选择当前node,node.left,node.right不能再选
  res[1]=node.val+left[0]+right[0];
  return res;
};
var t1=new TreeNode(3),t2=new TreeNode(4),t3=new TreeNode(5),t4=new TreeNode(1),t5=new TreeNode(3),t6=new TreeNode(1);
t1.left=t2,t1.right=t3,t2.left=t4,t2.right=t5,t3.right=t6;
console.log(rob(t1));