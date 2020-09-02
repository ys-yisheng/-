// 有一个XxY的网格，一个机器人只能走格点且只能向右或向下走，要从左上角走到右下角。请设计一个算法，计算机器人有多少种走法。

// 给定两个正整数let x,let y，请返回机器人的走法数目。保证x＋y小于等于12。


function countWays( x, y) {
    // write code ,here
    let dp[][]={0};
    dp[0][0]=0;
    for(let i=1;i<y;i++)//第一行初始化，因为只有横着走一种方法。
         dp[0][i]=1;
     for(let i=1;i<x;i++)//第一列初始化，因为只有竖着一种方法。
        dp[i][0]=1;
     for(let i=1;i<x;i++)//dp[i][j]的方法，等于走到上面一格和走到左边一个方法之和。
          for(let j=1;j<y;j++){
              dp[i][j]=dp[i-1][j]+dp[i][j-1];
          }
     return dp[x-1][y-1];       
}