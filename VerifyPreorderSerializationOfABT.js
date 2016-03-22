//One way to serialize a binary tree is to use pre-order traversal.
//When we encounter a non-null node, we record the node's value.
//If it is a null node, we record using a sentinel value such as #.
//Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree.
//Find an algorithm without reconstructing the tree.
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  var tree=preorder.split(','),stack=[];
  for(var i=0,len=tree.length;i<len;i++){
    stack.push(tree[i]);
    if(tree[i]=='#'){
      //stack中最后两个都是#说明是叶子结点,pop两个#后将最后个叶子结点变为#
      while(stack.length>1&&stack[stack.length-1]=='#'&&stack[stack.length-2]=='#'){
        stack.pop();
        stack.pop();
        if(stack.length==0)
          return false;
        stack[stack.length-1]='#';
      }
    }
  }
  if(stack.length==1&&stack[0]=='#')
    return true;
  return false;
};
//console.log(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#'));
console.log(isValidSerialization('1,#,#,1'));