//Given a singly linked list where elements are sorted in ascending order,
// convert it to a height balanced BST.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  var arr = [];
  while (head)
    arr.push(head.val), head = head.next;
  var root=arrToBST(arr,0,arr.length-1);
  return root;
};
var arrToBST = function(arr,start,end){
  if(start>end)
    return null;
  var mid=Math.floor((start+end)/2);
  var node=new TreeNode(arr[mid]);
  node.left=arrToBST(arr,start,mid-1);
  node.right=arrToBST(arr,mid+1,end);
  return node;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var n1=new ListNode(1),n2=new ListNode(2),n3=new ListNode(3),
    n4=new ListNode(4),n5=new ListNode(5),n6=new ListNode(6),
    n7=new ListNode(7);
n1.next=n2,n2.next=n3, n3.next=n4, n4.next=n5, n5.next=n6, n6.next=n7;
console.log(sortedListToBST(n1));