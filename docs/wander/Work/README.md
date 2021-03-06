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

## css3的循环滚动

解决css循环滚动 回到顶部卡顿问题

每次循环滚动最后的list为下一次滚动的首个元素

```
// css
@keyframes fadeOutUp {
    0% {
        transform: translate3d(0, 0, 0);
    }

    33% {
        transform: translate3d(0, 0 / @pxtorem, 0);
    }

    49% {
        transform: translate3d(0, -25 / @pxtorem, 0);
    }

    82% {
        transform: translate3d(0, -25 / @pxtorem, 0);
    }

    100% {
        transform: translate3d(0, -50 / @pxtorem, 0);
    }
}

animation: fadeOutUp 6s ease-out;

// js
this.$refs.animation.addEventListener('animationend', this.handlerAnimationEnd.bind(this), false);

//默认获取前三个  animationVisible 给dom添加动画class
this.animationVisible = true;
this.visibilityList = this.visibilityAllList.slice(this.index, 3);
this.index = this.index + 2;


handlerAnimationEnd() {
    this.animationVisible = false;
    if (this.index + 3 > this.visibilityAllList.length) {
        this.visibilityList = this.visibilityAllList.slice(this.index, this.visibilityAllList.length).concat(this.visibilityAllList.slice(0, 3 - (this.visibilityAllList.length - this.index)));
        this.index = 2 - (this.visibilityAllList.length - this.index);
    } else {
        this.visibilityList = this.visibilityAllList.slice(this.index, this.index + 3);
        this.index = this.index + 2;
    }
    setTimeout(() => {
        this.animationVisible = true;
    }, 500);
},

```

## 视频播放不出现loading黑屏调研
由于客户要求视频播放禁止出现loading、黑屏情况

### 调研
前期思路-在视频播放前设置视频封面,尝试之后发现在视频开始推流但是视频未开始播放之后还是有个loading旋转，所以修改封面样式
在视频真正播放前视频封面一直存在

video.js
```
// 去掉覆盖层
/deep/ .el-loading-mask {
    display: none;
}
// 播放时候封面隐藏
/deep/ .vjs-live .vjs-poster {
    display: none !important;
}
// 播放等待真正播放的时候封面显示
/deep/ .vjs-waiting .vjs-poster {
    display: block !important;
}
```


## 使用css3动画，页面抖动闪屏

### 问题原因
使用css3动画制作，但是动画会导致页面抖动闪屏

### 解决方案

使用到动画的样式设置如下样式，可解决
```
-webkit-backface-visibility: hidden;（设置进行转换的元素的背面在面对用户时是否可见：隐藏）
// 如果有3d加上下面句 ，没有可省略
-webkit-transform-style: preserve-3d; （设置内嵌的元素在 3D 空间如何呈现：保留 3D ）
```

eg:

```
.num {
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}
```

:::tip
上面问题在解决大屏的时候还是未生效，最后改写css动画使用requestAnimationFrame
:::

```
async animationRender() {
    if (!this.$refs.animationEle) {
        return false;
    }
    const parentHeight = this.$refs.animationEle.clientHeight;
    const itemHeight = this.$refs.animationEle.querySelector('div').clientHeight;
    if (this.indexAnimation <= -(parentHeight - 3 * itemHeight)) {
        this.indexAnimation = 0;
        await sleep(2000);
    } else {
        this.indexAnimation--;
    }
    this.$refs.animationEle ? (this.$refs.animationEle.style.top = `${this.indexAnimation}px`) : '';
},
animationloop() {
    this.animationRender();
    this.visibilityList.length > 3 ? this.animationId = window.requestAnimationFrame(this.animationloop) : '';
}

animationloop()
```
