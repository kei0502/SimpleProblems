//You are given coins of different denominations and a total amount of money amount.
//Write a function to compute the fewest number of coins that you need to make up that amount.
//If that amount of money cannot be made up by any combination of the coins, return -1.
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var result=[];
  const MAX=amount+1;
  result[0]=0;
  for(var i=1;i<=amount;i++)
    result[i]=MAX;
  //动态规划
  for(var i=1;i<=amount;i++){
    for(var j=0,len=coins.length;j<len;j++){
      if(i-coins[j]>=0)
        result[i]=Math.min(result[i],result[i-coins[j]]+1);
    }
  }
  if(result[amount]==MAX)
    return -1;
  return result[amount];
};
console.log(coinChange([2],1));