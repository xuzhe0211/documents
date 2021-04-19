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