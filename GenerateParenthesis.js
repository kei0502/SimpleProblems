/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result=[],left=[];
    result[0]='(',left[0]=1;
    for(var i=1;i<n*2;i++){
        for(var j=0;j<result.length;j++){
            if(result[j].length==i){
              if(left[j]>0){
                  result.push(result[j]+')');
                  left.push(left[j]-1);
                  result[j]=result[j]+'(';
                  left[j]=left[j]+1;
              }
              else{
                  result[j]=result[j]+'(';
                  left[j]=left[j]+1;
              }
            }
        }
    }
    //console.log(result,left);
    var i=0;
    while(i<result.length){
        if(left[i]!=0){
            result.splice(i,1);
            left.splice(i,1);
        }
        else {
            i++;
        }
    }
    return result;
};
console.log(generateParenthesis(2));
