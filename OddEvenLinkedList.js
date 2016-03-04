//Given a singly linked list, group all odd nodes together followed by the even nodes.
// Please note here we are talking about the node number and not the value in the nodes.
//You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var oddEvenList = function(head) {
  if(head==null)
    return head;
  var temp=head,even=head.next,evenhead=even;//evenhead记住偶数的头
  while(even&&even.next){
    var odd=even.next;
    even.next=odd.next;
    temp.next=odd;
    odd.next=evenhead;
    even=even.next;
    temp=temp.next;
  }
  return head;
};

var n1=new ListNode(1),n2=new ListNode(2),n3=new ListNode(3),
    n4=new ListNode(4),n5=new ListNode(5),n6=new ListNode(6),
    n7=new ListNode(7);
n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
n5.next=n6;
n6.next=n7;
var head=oddEvenList(n1);
while(head!=null){
  console.log(head.val);
  head=head.next;
}
