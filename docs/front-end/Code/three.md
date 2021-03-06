---
title: 二叉树
---

## 二叉树格式
```
var root = {
	val:5,
    left:{
    	val:4,
        left:{
        	val: 3
        },
        right:{
        	val:2
        }
    },
    right:{
   		val: 6,
        left:{
        	val:7
        },
        right:{
        	val: 8
        }
    }
}
```
## 二叉树的遍历
### 前序遍历
```
function rootTraverse(root) {
	let res = [];
    dfs(root);
	return res; 
}
function dfs(root){
    if (root) {
        res.push(root.val);
        root.left && dfs(root.left);
        root.right && dfs(root.right);
    }
}
```
非递归
```
function rootRraverse(root) {
	var result = [];
    var strack = [root];
    while(strack.length) {
    	let node = strack.pop();
        result.push(node.val);
        node.right && strack.push(node.right);
        node.left && strack.push(node.left);
    }
    return result;
}
```
### 中序遍历
```
function rootTraverse(root) {
	let res = [];
    dfs(root);
	return res; 
}
function dfs(root){
	if (root) {
    	root.left && dfs(root.left);
        res.push(root.val);
        root.right && dfs(root.right);
    }
}
```
### 后序遍历
```
function rootTraverse(root) {
	let res = [];
    dfs(root);
	return res; 
}
function dfs(root){
	if (root) {
    	root.left && dfs(root.left);
        root.right && dfs(root.right);
        res.push(root.val);
    }
}
```
### 广度遍历
```
function dfsRraverse(root) {
	var res = [];
    var strack = [root];
    var count = 0;
    function dfs(root) {
        var node = strack[count];
        if(node) {
            res.push(node.val);
            node.left && strack.push(node.left);
            node.right && strack.push(node.right);
            count++
            dfs();
        }
    }
    dfs();
    return res;
}
```
### 右明树
1. 递归
```
function rightSideView(root) {
	if (!root) return [];
    var arr = [];
    dfs(root, 0, arr);
    return arr
}
function dfs(root, step, res) {
	if (root) {
    	if(res.length === step) {
    		res.push(root.val)
    	}
    }
    root.right && dfs(root.right, step+1, res);
    root.left && dfs(root.left, step+1, res);
}
```
2. 非递归
```
function rightSideView(root) {
	if (!root) return [];
    let equeue = [root];
    let arr = [];
    while(equeue.length > 0){
    	let len = equeue.length;
        while(len) {
        	let node = equeue.shift();
            if(len == 1) arr.push(node.val);
            node.left && equeue.push(node.left);
            node.right && equeue.push(node.right);
            len--;
        }
    }
    return arr;
}
```
## 二叉树中和为某一值的路径
```
function PathSum (root, sum) {
	let res = [];
    let path = [];
    dfsHelper(root, path, sum, res);
    return res;
}
function dfsHelper(root, path, expectedNum, res) {
	if (!root) return;
    if(!root.left && !root.right) {
    	if(expectedNum === root.val) {
        	res.push([...path, root.val]);
            return;
        }
    }
   	path.push(root.val);
    dfsHelper(root.left, path, expectedNum - root.val, res);
    dfsHelper(root.right, path, expectedNum - root.val, res);
    path.pop(root.val);
}
```
## 二叉树最近的公共祖先
```
root = [3,5,1,6,2,0,8,null, null,7,4];
p = 5, q = 1;
function LowestCommonAncestor(root, p, q) {
	if (!root || root.val === p || root.val === q) return root;
    const left = LowestCommonAncestor(root.left, p,q);
    const right = LowestCommonAncestor(root.right, p, q);
    if(!left) return right;
    if(!right) return left;
    return root;
}
```
## 路径总和
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有的节点值等于目标和
```
var hasPathSum = function(root, sum) {
	//如果不存在，表示不是叶子节点
    if(!root) return false;
    //如果是叶子节点，判断减去这个节点是否为o
    if(!root.left && !root.right) return sum - root.val === 0;
    //左右节点递归寻找一条存在的pathSum
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
}
```
## 将有序数组转换
将一个按照升序排列的有序数组，转换成一颗高度平衡的二叉树。<br/>
给定有序数组：[-10,-3,0,5,9]<br/>
     0<br/>
   /  \<br/>
  -3   9<br/>
  /     \<br/>
 -10    5<br/>
 ```bash
 var soortedArrayToBST = function(nums) {
 	if (nums.length) return null;
    let creatTree = (left, right) => {
    	if(left > right) return null;
        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = createTree(left, mid -1);
        root.right = createTree(mid + 1, right);
        return root;
    }
    return creatTree(0, nums.length - 1);
 }
 ```
## 不同的二叉搜索树
 
给定一个整数n,求以1...n为节点组成的二叉搜索树有多少种

** 示例 **
```
输入：3
输出：5
解释：
给定n = 3,一共有五种不同的结构的二叉搜索树
1      3   3     2    1
 \    /   /     / \    \
  3  2   1     1   3    2
 /  /     \              \
2  1       2              3
```
** 代码 **
```
//动态规划
var numTrees = function(n) {
	const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; ++i) {
    	for (j = 1; j <= i; ++i) {
        	dp[i] += dp[j - 1] * dp[i -j];
        }
    }
    return dp[n];
}
```
## 二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远子节点的最长路径上的节点数。

说明：叶子节点是指没有节点的节点

实例：给定二叉树[3,9,20,null, null, 15,7]
```
     3
   /  \
  9    20
  	   / \
      15  7
```

题解
```
1.递归
树的深度和它的左右子树的深度有关
一个树的最大深度=根节点的高度+左右子树的最大深度中较大的那个
const maxDepth = (root) => {
	if(root === null) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
}

2.BFS

const maxDepth = (root) => {
	if(root == null) return 0;
    const queue = [root];
    const depth = 1;
    while(queue.length) {
    	const levelNum = queue.length; //当前层的节点个数
        for (let i = 0; i < levelNum; i++) {
        	const cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        if (queue.length) depth++;
    }
    return depth;
}
```


## 右明树

1. DFS

```
var rightSideView = function(root) {
    if (!root) return [];
    let arr = [];
    dfs(root, 0, arr);
    return arr;
}
function dfs(root, step, res) {
    if (root) {
        if (res.length === step) {
            res.push(root.val);
        }
        dfs(root.right, step + 1, res);
        dfs(root.left, step + 1, res);
    }
}
```

2. BFS

```
var rightSideView = function(root) {
    if (!root) return [];
    let queue = [root];
    let arr = [];
    while(queue.length > 0) {
        let len = queue.length;
        while (len) {
            let node = queue.shift();
            if (len === 1) arr.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            len--;
        }
    }
    return arr;
}
```