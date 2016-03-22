//Given a binary tree, return the zigzag level order traversal of its nodes' values.
// (ie, from left to right, then right to left for the next level and alternate between).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root)
    return [];
  var result=[],height=1,level=[];
  result[0]=[root.val],level[0]=[root];
  while(level[height-1].length!=0){
    var last=level[height-1];
    var len=last.length,templevel=[],temp=[];
    for(var i=0;i<len;i++){
      if(last[i].left!=null)
        templevel.push(last[i].left);
      if(last[i].right!=null)
        templevel.push(last[i].right);
    }
    if(templevel.length==0)
      break;
    level[height]=templevel;
    if(height%2==0){
      for(var i=0,levellen=templevel.length;i<levellen;i++)
        temp.push(templevel[i].val);
    }
    else{
      for(var i=templevel.length-1;i>=0;i--)
        temp.push(templevel[i].val);
    }
    result[height++]=temp;
  }
  return result;
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var t1=new TreeNode(1),t2=new TreeNode(2),t3=new TreeNode(3),t4=new TreeNode(4);
t1.left=t2,t1.right=t3,t2.left=t4;
console.log(zigzagLevelOrder(t1));