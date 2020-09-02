// 有一棵无穷大的满二叉树，其结点按根结点一层一层地从左往右依次编号，根结点编号为1。现在有两个结点a，b。请设计一个算法，求出a和b点的最近公共祖先的编号。

// 给定两个int a,b。为给定结点的编号。请返回a和b的最近公共祖先的编号。注意这里结点本身也可认为是其祖先。


//                         1
//             2		              3
//     4           5             6       7
// 8      9     10      11    12   13  14    15

//思路 除以2就是其组件 把大的除以2 直到比对方小，然后对方再除以2，一次类推，直到相等


//循环
function getLCA(a,  b) {
    // write code here
    while(a!=b){
        while(a>b) a/=2;
        while(a<b) b/=2;
    }
    return a;
}

//递归
function getLCA(a,  b) {
    // write code here
    if (a == b)
        return a;
    return a>b? getLCA(a/2, b): getLCA(a, b/2);
}