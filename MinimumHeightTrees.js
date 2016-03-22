//For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree.
//Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs).
//Given such a graph, write a function to find all the MHTs and return a list of their root labels.
//Format: The graph contains n nodes which are labeled from 0 to n - 1.
//You will be given the number n and a list of undirected edges (each edge is a pair of labels).
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
//discuss
var findMinHeightTrees = function(n, edges) {
  if(n==1)
    return [0];
  var result=[];
  var edgematrix=[];
  //建立边的matrix
  for(var i=0,len=edges.length;i<len;i++){
    if(edgematrix[edges[i][0]])
      edgematrix[edges[i][0]].push(edges[i][1]);
    else
      edgematrix[edges[i][0]]=[edges[i][1]];
    if(edgematrix[edges[i][1]])
      edgematrix[edges[i][1]].push(edges[i][0]);
    else
      edgematrix[edges[i][1]]=[edges[i][0]];
  }
  //找到所有叶子节点
  var level=[];
  for(var i=0;i<n;i++){
    if(edgematrix[i].length==1)
      level.push(i);
  }
  while(true) {
    var temp=[];
    for(var i=0,len=level.length;i<len;i++){
      for(var j=0,jlen=edgematrix[level[i]].length;j<jlen;j++){
        edgematrix[edgematrix[level[i]][j]].remove(level[i]);//已访问过,去掉防止circle
        if(edgematrix[edgematrix[level[i]][j]].length==1)
          temp.push(edgematrix[level[i]][j]);
      }
    }
    if(temp.length==0)
      return level;
    level=temp;
  }
};
//TLE
//var findMinHeightTrees = function(n, edges) {
//  var result=[],min=n;
//  var edgematrix=[];
//  for(var i=0;i<n;i++) {
//    var temp=[];
//    for(var j=0;j<n;j++)
//      temp.push(0);
//    edgematrix.push(temp);
//  }
//  for(var i=0,len=edges.length;i<len;i++){
//    edgematrix[edges[i][0]][edges[i][1]]=1,edgematrix[edges[i][1]][edges[i][0]]=1;
//  }
//  for(var i=0;i<n;i++) {
//    var height=findHeight(i, n, edgematrix);
//    if ( height < min) {
//      min = height;
//      result=[i];
//    }
//    else if(height==min){
//      result.push(i);
//    }
//  }
//  return result;
//};
//Array.prototype.contains = function(n){
//  return this.filter(function(x){return x==n;}).length==0;
//};
Array.prototype.remove = function(n){
  for(var i=0;i<this.length;i++){
    if(this[i]==n)
      this.splice(i,1);
  }
};
//var findHeight = function(node,n,matrix){
//  var notvisited=[],arr=[];
//  arr[0]=[node];
//  for(var i=0;i<n;i++){
//    if(i!=node)
//      notvisited.push(i);
//  }
//  var height=1;
//  while(arr.length!=0&&notvisited.length!=0){
//    var temp=[];
//    for(var i=0,len=arr.length;i<len;i++){
//      var edges=matrix[arr[i]];
//      for(var j=0,jlen=edges.length;j<jlen;j++){
//        if(edges[j]==1&&!notvisited.contains(j))
//          notvisited.remove(j,1),temp.push(j);
//      }
//    }
//    console.log(arr,temp,notvisited);
//    arr=temp;
//    height++;
//  }
//  return height;
//};
//console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));