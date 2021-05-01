---
title: JS实现持续动画效果
---

## animation(Css)

### 兼容性与属性

> 猛戳[这里](https://caniuse.com/?search=animation)查看兼容性

+ animation-name: 动画名称
+ animation-duration: 动画时长
+ animation-timing-function: 动画执行方式
+ animation-delay: 动画延迟事件
+ animation-iteration-count: 动画执行次数
+ animation-direction: 是否反向执行动画
+ animation-fill-node: 动画执行前后的样式

```
.box {
    width: 200px;
    heigh: 200px;
    background-color: aqua;
    position:absolute;
    left: 0;
    top: 0;
    animation: test 3s linear 2s infinite;
}

@keyframes test {
    from {}
    to {
        width: 50px;
        height: 50px;
        background-color: red;
        opacity: 0.5;
        left: 500px;
        top: 500px;
    }
}

<div class="box"></div>
```

## requestAnimationFrame(JS)

### 兼容性与基本概念

- 优势: 
    - 浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的效果
    - 一旦页面不处于浏览器的当前标签，就会停止刷新，这就节省了CPU、GPU和电力

- 使用
    - 持续调用requestAnimFrame即可
    - 可以使用cancelAnimationFrame清除动画

### 举例

```
#anim  {
    position: absolute;
    left: 0;
    width: 150px;
    height: 150px;
    line-height: 150px;
    background: aqua;
    color: white;
    border-radius: 10px;
    padding: 1em;
}

<div id="anim">Click here to start animation</div>

// 兼容处理
window.requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame || 
        window.wikitRequestAnimationFrame || 
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(callback, 1000/ 60);
        }
    )
})()

var elem = document.getElementById('anim');
var startTime = undefined;

function render(time) {
    time = Date.now();
    if (startTime === undefined) {
        startTime = time;
    }
    elem.style.left = ((time - startTime) / 10) % 300 + 'px';
    elem.style.top = ((time - startTime) / 10) % 300 + 'px';
    elem.style.borderRadius = ((time - startTime) / 10) % 300 + 'px';
    elem.style.opacity = Math.floor((time - startTime / 100)) % 2 === 0 ? 1 : 0.3
}

elem.onclick = function() {
  (function animloop() {
    render()
    requestAnimFrame(animloop)
  })()
}
```