//Divide two integers without using multiplication, division and mod operator.
//If it is overflow, return MAX_INT.
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var max=2147483647;
  if(dividend==0)
    return 0;
  var negative=(dividend<0)^(divisor<0);
  if(dividend<0)
    dividend=-dividend;
  if(divisor<0)
    divisor=-divisor;
  if(dividend>max&&divisor==1&&!negative)
    return max;
  if(divisor==1)
    return negative?-dividend:dividend;
  var left= 0,result=0;
  for(var i=0;i<31;i++){
    if((divisor<<i)>=dividend||(divisor<<i)<0) {//判断负数防止溢出
      left = i;
      break;
    }
  }
  for(var i=left;i>=0;i--){
    if((divisor<<i)>dividend)
      continue;
    if((divisor<<i)<0&&-(divisor<<i)!=dividend)//判断是否为max+1时溢出
      continue;
    if((1<<i)<0)
      result=result|-(1<<i);
    else
      result=result|1<<i;
    if((divisor<<i)<0)
      dividend=dividend+(divisor<<i);
    else
      dividend=dividend-(divisor<<i);
  }
  return negative?-result:result;
};
console.log(divide(2147483647,2));