/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}
var copyRandomList = function(head) {
  if(head==null) return head;
  var newhead=new RandomListNode(head.label);
  var random=[],oldlist=[],newlist=[];//oldlist记录老的,newlist记录新的,random记录老的依次对应的random
  random.push(head.random);
  newlist.push(newhead);
  oldlist.push(head);
  var temp=newhead,head=head.next;
  while(head!=null){
    temp.next=new RandomListNode(head.label);
    random.push(head.random);
    temp=temp.next;
    newlist.push(temp);
    oldlist.push(head);
    head=head.next;
  }
  var temp=newhead;
  //根据random[i]在oldlist中的查找,找到对应的newlist的node
  for(var i=0;i<random.length;i++){
    var r=null;
    for(var j=0;j<newlist.length;j++){
      if(random[i]==oldlist[j]){
        r=newlist[j];
        break;
      }
    }
    temp.random=r;
    temp=temp.next;
  }
  return newhead;
};
var n1=new RandomListNode(1),n2=new RandomListNode(2),n3=new RandomListNode(3);
n1.next=n2,n2.next=n3;
n1.random=n3,n2.random=n1,n3.random=n2;
var head=copyRandomList(n1);
while(head!=null){
  console.log(head);
  head=head.next;
}
