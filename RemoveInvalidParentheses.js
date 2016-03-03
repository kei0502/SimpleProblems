//Remove the minimum number of invalid parentheses in order to make the input string valid.
//Return all possible results.
//Note: The input string may contain letters other than the parentheses ( and ).
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  var result=[];
  var left= 0,right=0;
  for(var i= 0,len= s.length;i< len;i++){
    if(s[i]=='(')
      left++;
    else if(s[i]==')'){
      if(left>0)
        left--;
      else
        right++;
    }
  }
  remove(s,result,0,left,right,0,'');

  return result;
};
//left表示要去掉的左括号数,right表示要去掉的右括号数,pair表示未配对的左括号数,str表示暂存的结果
var remove = function(s,result,i,left,right,pair,str) {
  if(i== s.length&&left==0&&right==0&&pair==0) {
    //去重
    for(var j=0;j<result.length;j++){
      if(result[j]==str)
        return;
    }
    result.push(str);
  }
  if(i== s.length||left<0||right<0||pair<0)
    return;
  if(s[i]=='('){
    remove(s,result,i+1,left-1,right,pair,str);//不加这个左括号,left--
    remove(s,result,i+1,left,right,pair+1,str+'(');//加这个左括号,未配对pair++
  }
  else if(s[i]==')'){
    remove(s,result,i+1,left,right-1,pair,str);
    remove(s,result,i+1,left,right,pair-1,str+')');
  }
  else
    remove(s,result,i+1,left,right,pair,str+s[i]);//不影响left/right/pair
};
console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses('(()()()'));
