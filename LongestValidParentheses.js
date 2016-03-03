//Given a string containing just the characters '(' and ')',
//find the length of the longest valid (well-formed) parentheses substring.
//For "(()", the longest valid parentheses substring is "()", which has length = 2.
//Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

/**
 * @param {string} s
 * @return {number}
 */
//方法一
var longestValidParentheses1 = function(s) {
    var left=[];//left[i]表示[0,i]有多少个未匹配的左括号
    var max= 0;
    for(var i=0,len=s.length;i<len;i++){
        if(i==0){
            if(s[i]=='(')
                left[0]=1;
            else
                left[0]=0;
        }
        else{
            if(s[i]=='(') {
                left[i] = left[i - 1] + 1;
            }
            else{
                if(left[i-1]>0){
                    left[i]=left[i-1]-1;
                }
                else{
                    left[i]=0;
                }
            }
        }
    }
    //console.log(i,left);
    var templeft=left[s.length-1],tempmax=1,tempindex=s.length-1;
    //从后往前,先找到最小左括号templeft,然后找tempindex之前大于templeft的匹配对
    while(tempindex>=0) {
        if(tempindex==0)
            break;
        while (tempindex - 1 >= 0 && left[tempindex - 1] <= templeft) {
            tempindex--;
            templeft = left[tempindex];
        }

        //console.log(tempindex,max);
        tempmax=1;
        for (var j = tempindex - 1; j >= 0; j--) {
            if (left[j] > templeft)
                tempmax++;
            if (left[j] == templeft) {
                if (tempmax > max)
                    max = tempmax;
                if (j - 1 >= 0 && left[j - 1] <= templeft) {
                    tempindex=j--;
                    break;
                }
                else if(j==0){
                    return max;
                }
                else {
                    tempmax++;
                }
            }
            if (j == 0){
                if(left[0]>0)//第一位是左括号,还能继续匹配
                    return tempmax>max?tempmax:max;
                else//第一位是右括号,结束匹配
                    return max;
            }
        }
    }
    return max;
};
//方法二
var longestValidParentheses = function(s) {
    var res=[];//存有效括号对的起始和结束
    var stack=[];//stack存左括号的index
    var max=0;
    for(var i=0,len=s.length;i<len;i++){
        if(s[i]=='(')
            stack.push(i);
        else{
            var start=stack.pop();
            res[start]=1;
            res[i]=1;
        }
    }
    var temp=0;
    for(var i=0,len=s.length;i<len;i++){
        if(res[i]==1)
            temp++;
        else {
            if(temp>max)
                max=temp;
            temp = 0;
        }
    }
    return temp>max?temp:max;
}
console.log(longestValidParentheses("()(())"));//6
console.log(longestValidParentheses("((()()(()((()"));//4
console.log(longestValidParentheses("(()))())("));//4
console.log(longestValidParentheses("(())()(()(("));//6
console.log(longestValidParentheses(')()())()()('));//4
console.log(longestValidParentheses('(()))())('));//4
console.log(longestValidParentheses('())'));//2
console.log(longestValidParentheses(')('));//0
console.log(longestValidParentheses('()'));//2
console.log(longestValidParentheses(')(())'));//4
console.log(longestValidParentheses(')(((((()())()()))()(()))('));//22
console.log(longestValidParentheses('(()()'));//4
console.log(longestValidParentheses('((()())'));//6