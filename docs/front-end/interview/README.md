---
title: 前端面试题
---
### 开发模式、算法、并发限制
## 柯里化函数 add(1)(2)(3)
```
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

// 可使用剩余参数的方式
function add(..._args) {
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
```
[剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

### 虚拟DOM,diff算法，编译compile
### Q1 请说一下你的上一家公司开发发布流程。
### Q http 的 cache ，浏览器如何获取设置
强缓存&协商缓存

### Q2 虚拟dom是怎么实现的
### Q3 你说一下为什么canvas的图片为什么会有跨域问题

### Q4 你说一下webpack的一些plugin，怎么使用webpack对项目进行优化。

1、减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime。

2、并行编译 happypack、thread-loader、uglifyjsWebpackPlugin开启并行

3、缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin开启缓存、babel-loader开启缓存

4、预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin
## Q 统计网站出现最多的html标签
```
var map = {};
    //采用递归调用的方法，比较方便和简单。
    function fds(node) {

        if (node.nodeType === 1) {
            //这里我们用nodeName属性，直接获取节点的节点名称
            var tagName = node.nodeName;
            //判断对象中存在不存在同类的节点，若存在则添加，不存在则添加并赋值为1
            map[tagName] = map[tagName] ? map[tagName] + 1 : 1;
        }
            //获取该元素节点的所有子节点
        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
            //递归调用
            fds(children[i])
        }
    }
    fds(document);
    console.log(map)
    
    
    function objvalueSort(obj) {//排序的函数
    //1.根据数组中的对象的“xxx”，得到排序后的key，return key2-key1 表示降序
    var newkey = Object.keys(obj).sort(function(key1,key2){

        return obj[key2]['xxx']-obj[key1]['xxx'];
    })
　　//2.用排序后的key构建新的对象数组
    var newObj = {};//创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
    
    return newObj;//返回排好序的新对象
}
```
### Q5说一下你觉得你最得意的一个项目？你这个项目有什么缺陷，弊端吗？

### Q6 请手写实现一个promise

### Q7 现在有那么一个团队，假如让你来做技术架构，你会怎么做？


```



性能评估与优化；
工作中怎样收集性能相关信息，有哪些关键数据，如何获取的，
然后做了哪些优化工作，达到什么效果之类的

还有就是我简历有电视端 web 的开发，问了很多电视上焦点控制和内存占用的控制的问题


还有就是怎么拆解 KPI 或 OKR，怎么跟团队成员分配任务
```
## 转化为驼峰命名

```
var s1 = "get-element-by-id" // 转化为 getElementById
var f = function(s) {
	return s.replace(/-\w/g, function(x) {
		return x.slice(1).toUpperCase(); 
    })
}
```

## 查找字符串中出现最多的字符和个数

```
let str = "abcabcabcbbccccc";
let num = 0;
let char = '';
// 使其按照一定的次序排列
str = str.split('').sort().join(''); // "aaabbbbbcccccccc"
// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re,($0,$1) => {
    if(num < $0.length){
        num = $0.length;
        char = $1;
    }
});
console.log(`字符最多的是${char}，出现了${num}次`)
```

## promise 相关题目

```
现在有一个 js 函数，接受一个参数：uid 的数组，数组长度最长 100 ，批量去服务端查询用户 profile：
const getUserProfileByUids = (uidList) => {
    return fetch(`/user/get?uidlist=${encodeURIComponent(uidList.join('.'))}`).then((res) => {
        return res.json();
    });
}
// 服务端的返回值的结构是：  [{uid: "001", nick: 'xx', age: 18},{uid: "002", nick: 'xx', age: 18}]
// 如果传入的 uid 在服务端不存在，在返回值里就没这个 uid 的相关数据
现在要求实现一个新的查询方法，接受单个 uid，返回一个 Promise ，查询成功，resolve 这个 uid 的 profile，否则 reject。
要求合并 100ms 内的单个查询，只去服务端批量查询一次，不允许使用任何三方库，批量查询直接使用 getUserProfileByUids
输入输出样例
1. 100ms 内的单个请求能够被合并
2. 请求成功和失败都能正确派发请求的结果，对应 promise 的 resove 和 reject
3. 窗口内超过 100 个请求，能确保每次批量请求的 ID 个数不超过 100
```
解题
```
// 入口函数
const getUserProfileByUid = function (uid) {
  return mergeRequest(uid).then(function (res) {
    return res[uid];
  })
}
const debounce = (runner, timeout = 100, max = 100) => {
  let timer = null;
  let uidCatch = new Array();
  let promiseCatch = new Array();
  return function () {
    clearTimeout(timer);
    timer = null
    uidCatch.push(arguments[0])
    let task = myPromise();
    promiseCatch.push(task);
    let callback = function () {
      timer = null;
      let uidCatchTemp = uidCatch;
      uidCatch = [];
      let tmpPromises = promiseCatch;
      promiseCatch = [];
      let delay = Promise.resolve().then(function () {
        return runner(uidCatchTemp);
      });
      tmpPromises.forEach(function (v) {
        delay.then(v.resolve, v.reject)
      });
    };
    if (uidCatch.length >= max) {
      callback();
    } else {
      timer = setTimeout(callback, timeout);
    }
    return task.promise;
  };
}

const mergeRequest = debounce(function (uidList) {
  return fetch(`/user/get?uidlist=${encodeURIComponent(uidList.join('.'))}`).then((userList) => {
    let result = {};
    userList.forEach(function (user) {
      if (!result[user.uid]) {
        result[user.uid] = user;
      }
    });
    return result;
  });

  // 调用模拟 API
  // return api(uidList.join('.')).then(function (userList) {
  //   let result = {};
  //   userList.forEach(function (user) {
  //     if (!result[user.uid]) {
  //       result[user.uid] = user;
  //     }
  //   });
  //   return result;
  // });
});

// 同级获取 resolve reject
const myPromise = () => {
  let obj = {};
  obj.promise = new Promise(function (resolve, reject) {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
}


// 以下均为方便调试的模拟方法，真实场景不需要
// 模拟并发
// const main = () => {
//   for (let uid = 0; uid < 10; uid++) {
//     getUserProfileByUid(uid).then(res => console.log('res',res.name))
//   }
// }

// 模拟接口
// const api = (arrStr) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let arr = arrStr.split('.')
//       let res = arr.map((uid, index) => {
//         return {
//           uid: uid,
//           name: 'demo' + index
//         }
//       })
//       resolve(res)
//     }, 20);
//   })
// }
```


##### 输出
```
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})

// 输出
0
1
2
3
4
5
6
```