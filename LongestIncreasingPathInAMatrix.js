//Given an integer matrix, find the length of the longest increasing path.
//From each cell, you can either move to four directions: left, right, up or down.
//You may NOT move diagonally or move outside of the boundary
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  var result=[];
  for(var i=0,len=matrix.length;i<len;i++){
    var temp=[];
    for(var j= 0,jlen=matrix[i].length;j<jlen;j++)
      temp.push(-1);
    result.push(temp);
  }
  var max=-1;
  for(var i=0,len=matrix.length;i<len;i++){
    for(var j= 0,jlen=matrix[i].length;j<jlen;j++){
      result[i][j]=Math.max(result[i][j],depthPath(matrix,i,j,result));
      if(max<result[i][j])
        max=result[i][j];
    }
  }
  return max==-1?0:max+1;
};
var depthPath = function(matrix,i,j,result){
  if(result[i][j]!=-1)//如果已经算过,直接返回
    return result[i][j];
  var r1=0,r2=0,r3=0,r4=0;//分别计算四个方向
  if(i>0&&matrix[i-1][j]>matrix[i][j]) {
     r1=depthPath(matrix, i - 1, j, result)+1;
  }
  if(i<matrix.length-1&&matrix[i+1][j]>matrix[i][j]) {
    r2=depthPath(matrix, i + 1, j, result)+1;
  }
  if(j>0&&matrix[i][j-1]>matrix[i][j]) {
    r3=depthPath(matrix, i, j - 1, result)+1;
  }
  if(j<matrix[i].length-1&&matrix[i][j+1]>matrix[i][j]) {
    r4=depthPath(matrix, i, j + 1, result)+1;
  }
  result[i][j]=Math.max(r1,r2,r3,r4);
  return result[i][j];
};
console.log(longestIncreasingPath([[3]]));

console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]));
//console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));