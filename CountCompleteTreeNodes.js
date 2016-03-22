//Given a complete binary tree, count the number of nodes.
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
//TLE!!
//var countNodes = function (root) {
//  if (!root)
//    return 0;
//  if (root.left && root.right)
//    return 1+countNodes(root.left) + countNodes(root.right);
//  else if (root.left)
//    return 1+countNodes(root.left);
//  else if (root.right)
//    return 1+countNodes(root.right);
//  else
//    return 1;
//};
var countNodes = function(root){
  if(!root)
    return 0;
  var l=root.left,r=root.right,lheight=1,rheight=1;
  while(l)
    l=l.left,lheight++;
  while(r)
    r=r.right,rheight++;
  //满二叉树,直接根据高度计算节点个数
  if(lheight==rheight)
    return Math.pow(2,lheight)-1;
  return 1+countNodes(root.left)+countNodes(root.right);
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var t1=new TreeNode(1),t2=new TreeNode(2),t3=new TreeNode(3),t4=new TreeNode(4);
t1.left=t2,t1.right=t3,t2.left=t4;
console.log(countNodes(t1));