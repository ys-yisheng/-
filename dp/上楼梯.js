/*有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶、3阶。请实现一个方法，计算小孩有多少种上楼的方式。为了防止溢出，请将结果Mod 1000000007

给定一个正整数int n，请返回一个数，代表上楼的方式数。保证n小于等于100000。

*/

//对于上k级台阶,当k>3时，由于每次可以上1,2,3级，则最后一次应该是上1,2,3中的一个
//case1，最后一次上1级，也即前面上了k-1级，k-1级的可能情况为：A[k-1]次
//同理 case2,A[k-1], case3 A[k-3]
//从而有： A[k] = A[k-3] + A[k-2] + A[k-1]

//1.正向叠加的做法 只用到了4个变量的空间，时间也是最快的。
function countWays(n) {
    // write code here
    const a = [ 0, 1, 2, 4];
    let f;
    if (n < 4)
        return a[n];
    for (let i = 4; i <= n; i++)
    {
        f = ((a[1] + a[2]) % 1000000007 + a[3]) % 1000000007;
        a[1] = a[2];
        a[2] = a[3];
        a[3] = f;
    }
    return a[3];
}


// 2.递归  时间复杂度高 但是简单
function countWays(n) {
    // write code here
    const A = [0, 1, 2, 4];
    if (n >= 4){
        return  A[n] = countWays(n-3) + countWays(n-2) + countWays(n-1);
    }else{
       return A[n];
    }
}


//3.带cached的递归
let cached = {
    0:0,
    1:1,
    2:2,
    3:4,
};
function countWays(n) {
    // write code here
    const A = [0, 1, 2, 4];
    if (n >= 4){
     const temp = countWays(n-3) + countWays(n-2) + countWays(n-1);
      A[n] = temp;
      cached[n] = temp;
      return A[n]
    }else{
       return A[n];
    }
}
