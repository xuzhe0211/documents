---
title: 工作中问题简单记录
---


## 正则

```
/^(?!string).*/.test('string/0.0.1') //非string开头得字符串
```

## js获取元素div相对body距离

如果取到页面中任意某个Html元素与body元素之间得偏移距离

offetTop和offsetLeft这两个属性，IE、opera和Firefox对它两得结束存在差异

IE5.0+、opera8+: offsetTop和offsetLeft都是相对父级元素
Firefox1.06:offsettop和offsetLeft都是相对body元素

因此
1. 在FF在直接使用offsetTop和offsetLeft，就可以直接取到页面中某个Html元素与body元素之间得偏移距离
2. 在IE、opera下则比较麻烦

需要首先取到该Html元素与body元素之间所有Html元素，计算各自得OffsetTop和offsetLeft，然后在累加

即：从该html元素开始，遍历至body，在遍历过程中，如果某个HTML元素得css设置了boderWidth得话，则borderWidth不是算在offsetTop和offsetLeft内得---因此在遍历得过程中，还需要在累加上

obj.currentStyle.borderLeftWidth obj.currentStyle.borderTopWidth

```bash
function getPoint(obj) { // 获取某元素以浏览器左上角为原点得坐标
	var t = obj.offsetTop; // 获取该坐标对应芙蓉起得上边距
    var l = obj.offsetLeft; // 对应父容器得左边距
    // 判断是否有父容器，如果存在则累加其边距
    while (obj === obj.offsetParent) { // 等效obj = obj.offsetParent; while(obj != undefined)
    	t += obj.offsetTop; // 叠加父容器得上边距
        l += obj.offsetLeft; // 叠加父容器得左边距
    }
    alert(`top: ${t};left:${l}`)
}

```

## ts项目中Cannot find module ‘XXX‘ its corresponding type declarations

Cannot find module '@/utils/request' or its corresponding type declarations.Vetur...

### 原因分析
报错示例

<img :src="$withBase('/images/2021021809232546.png')" alt="报错示例">

::: tip
上述问题的产生，一般是由于Visual Studio Code中安装了Vetur插件，它要求：

+ 项目在工作区根目录(就是把项目文件夹拖进vscode后的效果)
+ 项目排在第一位(不再第一位可以吧鼠标拖动项目移动到第一位)
:::

### 解决方案

直接把项目移至工作区的第一位

<img :src="$withBase('/images/20210219091528898.png')" alt="解决方案">


## 二进制/十进制互相转换

### 十进制转换为二进制

```
var num = 100;
console.log(num.toString(2));
```

toString()方法可把一个Number对象转换为一个字符串，并放回结果

### 二进制转十进制

```
var num = 1100100;
console.log(parseInt(num, 2))
```

### 其他转换

```
parseInt(num,8);   //八进制转十进制
parseInt(num,16);   //十六进制转十进制
parseInt(num).toString(8)  //十进制转八进制
parseInt(num).toString(16)   //十进制转十六进制
parseInt(num,2).toString(8)   //二进制转八进制
parseInt(num,2).toString(16)  //二进制转十六进制
parseInt(num,8).toString(2)   //八进制转二进制
parseInt(num,8).toString(16)  //八进制转十六进制
parseInt(num,16).toString(2)  //十六进制转二进制
parseInt(num,16).toString(8)  //十六进制转八进制
```

## js获取指定时区的时间

```
const timezone = 8; // 目标时区时间，东八区  东时区正数 西时区负数
const offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
const nowDate = new Date().getTime(); // 本地时间距1970年1月1日午夜之间的毫秒数
const targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
console.log('东8区现在是：' + targetDate);
```