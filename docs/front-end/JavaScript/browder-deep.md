---
title: 浏览器运行机制
---
#### <a id="前言">前言</a>

大家肯定都听说过很多浏览器优化原则吧，例如说减少DOM操作，使用transformX(0)进行硬件优化，避免js文件执行时间过长使用的页面卡顿等等。大部分可能都知道，但也仅限知道，即知其然，不知其所以然。

所以接下来，梳理一下浏览器运行过程中需要的知识：


## 进程与线程

```
- 进程是一个工厂，每个工厂都有独立的资源。
- 线程是工厂中的工人，可能只有一个，可能有好多个。多个工人协同完成工作。工人共享工作资源。
```

回到硬件上来理解
```
- 工厂的资源->系统分配的内存
- 工厂之间相互独立->进程之间相互独立，也即进程分配到的内存相互独立，无法读取到对方内存中的数据
- 一个工厂有一个或多个工人->一个进程中有一个或多个线程
- 多个工人协同完成工作->进程中多个线程协同完成工作。即线程之间互相发送请求和接收结果。
- 工人共享工作资源->进程中所有线程都能访问到相同一块内存，即信息是互通的
```
**一个软件不等于一个进程，一个软件可能包含多个相互独立的进程**

- 进程是系统资源分配的最小单位(即系统以进程为最小单位分配内存空间，同时进程是能独立运行的)
- 线程是系统调度的最小单位(即系统以线程为单位分配cup中的核)

## 浏览器进程

首先，明确的是：**浏览器是多线程的**

浏览器都有哪些进程

- Browser进程：是浏览器的主进程，负责主控，协调，只有一个，可以看做是浏览器的大脑。负责下载页面的网络文件，负责将renderer进程得到的存在内存中的位图渲染(显示)到页面上；负责创建和销毁tab(renderer进程)；负责与用户的交互
- GPU进程：只有一个，负责3D绘制，只有当该页面使用了硬件加速才会使用它，来渲染页面；否则的话，不适用这个进程，而是用Browser进程来渲染页面
- renderer进程，又名浏览器内核，每个tab页面对应一个独立的renderer进程，内部有多个线程；负责脚本执行，位图绘制，事件触发，任务队列轮询等
- 第三方插件进程，每个类型的插件对应一个进程

浏览器是多进程好处非常明显，如果浏览器是单进程的话，则一个页面，一个插件的本会会导致整个浏览器的崩溃，用户体验会非常差

### renderer进程是多线程的，以下是各个线程的名称及作用(仅列举常驻线程)

- js引擎线程

  也称js内核，解析js脚本，执行代码；与GUI线程互斥，即当js引擎线程运行时，GUI线程会被挂起，当js引擎线程结束运行时，才会继续运行GUI线程；由一个主线程和多个web worker线程组成，由于web worker是附属于主线程，无法操作DOM等，所以js还是单线程语言(在主线程运行js代码)

- GUI线程

  用于解析html为DOM树，解析css为css Dom树，布局layout,绘制paint;当页面需要重排reflow，重绘repaint时，使用该线程；与js引擎线程互斥；

- 事件触发线程

  当对应事件触发(不论是webapi完成事件触发，还是页面交互事件触发)时，该线程会将事件对应的回调函数放入callback queue(任务队列)中，等待js引擎线程的处理

- 定时触发线程

  对应于setTimeout/setInterval API，由该线程来计时时，当计时结束，将事件对应的回调函数放入任务队列中；当setTimeout的定时的时间小于4ms，一律按照4ms来算

- http请求线程

  每有一个http请求就开一个该线程，当检测到状态变更的话，就会产生一个状态变更事件，如果该状态变更事件有回调函数的话，则放入任务队列中；

- 任务队列轮训线程

	用于轮询监听任务队列，以便知道任务队列时候为空

### html解析 

html解析包含一系列的步骤，过程Bytes->Characters->tokens->Noodes->DOM 最终将html解析为dom树。

### css解析

html解析包含一系列的步骤，过程Bytes->Characters->tokens->Noodes->cssom 最终将html解析为dom树。


### 回流与重绘
```
- 布局是页面首次加载时进行的操作，重新布局即为回流
- 绘制是页面首次加载时进行的操作，重新绘制即为重绘
```

**什么时候会发生回流和重绘呢**

- 当页面的某部分元素发生了尺寸、位置、隐藏改变，页面进行回流。得对整个页面重新进行布局计算，将所有尺寸位置受到影响的元素回流
- 当页面的某部分元素的外观发生了改变，但尺寸位置隐藏没有改变，页面进行重绘(同样，只重绘部分元素，而不是整个页面重绘)

回流的同时往往会伴随着重绘，重绘不一定导致回流

**如何减少回流**

- 减少逐项更改样式，最好一次性更改style，或是将更改的样式定义在一个class中并一次性更新
- 避免循环操作DOM，而是新建一个节点，在他上面应用所有的DOM操作，然后再将他接入到DOM中
- 当要频繁得到如offset属性时，只读取一次然后赋值给变量，而不是每次都获取一次
- 将复杂的元素绝对定位或固定定位，使他脱离文档流，否则回流代价很高
- 使用硬件加速创建一个新的符合图层，使其需要回流时不会影响原始复合图层回流

### 硬件加速

我们在未开启硬件加速的时候使用cpu渲染页面，只有开启了硬件加速，才会使用到GPU渲染页面

在详细讲解硬件加速前，我们先了解下简单图层和复合图层

- DOM中的每个节点对应一个简单图层
- 复合图层是各个简单图层的合并,一个页面一般来说只一个复合图层,无论你创建了多少个元素,都在这个复合图层中
- 其次,absolute,fixed布局，可以使该元素脱离文档流，但话还是在这个复合图层中，所以他还是会影响复合图层的绘制，但是不会影响重排

**当一个元素使用硬件加速后，会生成一个新的复合图层** 这个不管其如何变化，都不会影响原复合图层，不过不要大量使用硬件加速，会导致资源消耗过，导致页面卡顿。

所以使用了硬件加速后，会有多个复合图层，然后多个复合图层之间相互独立，单独布局，绘制

**如何才能使用硬件加速**

1. translate3d translateZ
2. opacity属性

当一个元素使用了硬件加速，在其后的元素，若z-index比他大或者相同，且absolute fixed的属性想通弄过，则默认这些元素也创建了各自的复合图层。

所以我们人为的为这个元素添加z-index值，从而避免这种情况

### 浏览器页面的渲染流程

```
1.解析html得到DOM树
2.解析css得到css树
3.合并得到render树
4.布局，当页面有元素尺寸 大小 隐藏有变化或增加 删除元素时，重新计算布局，并修改页面中所有收影响的部分
5. 绘制，当页面元素的外观发生变化时候，重新绘制
6.GUI线程将得到的各层的位图(每个元素对应的一个普通图层)发送给Browser进程，由Browser进程将各层合并 渲染到页面上
```

### DOMContentLoaded和load事件

```
DOMContentLoad：当DOM加载完成时触发
load:当Dom 样式表 脚本架在你完成时触发
```
**DOMContentLoad在load之前触发**

### css堵塞情况

首先，是在Browser进程中下载css文件，当下载完成后，发送给GUI线程。

其次，是在GUI线程中解析html及css，不过这两者是并行的。

由于css的下载和解析不会影响DOM树，所以不会堵塞html文件的解析，但会堵塞页面渲染。

 这样的设计是非常合理的，如果css文件的下载和解析不会堵塞页面渲染，那么在页面渲染的途中或结束后发现元素样式有变化，则又需要回流和重绘。

### js堵塞情况

确的是，js文件的下载和解析执行都会堵塞html文件的解析及页面渲染。

因为js脚本可能会改变DOM结构，若是其不堵塞html文件的解析及页面渲染的话，那么当js脚本改变DOM结构或元素样式时，会引发回流和重绘，会造成不必要的性能浪费，不如等待js执行完，在进行html解析和页面渲染。

如果你不想js堵塞的话，则使用async属性，这样就可以异步加载js文件，加载完成后立即执行

### css和js文件应当放在html哪个位置

 当需要在DOM树完成之前用js进行初始化操作的话，在head中使用js。

 如果是需要在DOM树形成之后，即要操作DOM，则在body元素的末尾。不过也可以使用load事件。

 如果js的内容比较小，则推荐使用内部js而不是引用js，这样可以减少http请求。


 **css：**

 一般放在head中，因为css的解析不影响html的解析，所以越早引入，越早同时解析。

### 事件循环机制

事件循环机制的核心是事件触发线程，由于执行栈产生异步任务，异步任务完成后事件触发线程将其回调函数传入到任务队列中，当执行栈为空，任务队列将队列头的回调函数入执行栈，从而新的一轮循环开始。这就是称为循环的原因。

**宏任务和微任务**
宏任务（macrotask）：

 - 主代码块和任务队列中的回调函数就是宏任务

 - 为了使js内部宏任务和DOM任务能够有序的执行，每次执行完宏任务后，会在下一个宏任务执行之前，对页面重新进行渲染。（宏任务 -> 渲染 -> 宏任务）



#### 微任务（microtask）：

 - 在宏任务执行过程中，执行到微任务时，将微任务放入微任务队列中。


 - 在宏任务执行完后，在重新渲染之前执行。

 - 当一个宏任务执行完后，他会将产生的所有微任务执行完。


分别在什么场景下会产生宏任务或微任务呢：

宏任务：主代码块，setTimeout，setInterval（任务队列中的所有回调函数都是宏任务）

微任务：Promise


### 导致页面无法立即响应的原因

 导致页面无法响应的原因是执行栈中还有任务未执行完，或者是js引擎线程被GUI线程堵塞。


### html文件解析过程

```
1. Browser进程下载html文件并将文件发送给renderer进程

2. renderer进程的GUI进程开始解析html文件来构建出DOM

3. 当遇到外源css时，Browser进程下载该css文件并发送回来，GUI线程再解析该文件，在这同时，html的解析也同时进行，但不会渲染（还未形成渲染树）

4. 当遇到内部css时，html的解析和css的解析同时进行

5. 继续解析html文件，当遇到外源js时，Browser进程下载该js文件并发送回来，此时，js引擎线程解析并执行js，因为GUI线程和js引擎线程互斥，所以GUI线程被挂起，停止继续解析html。直到js引擎线程空闲，GUI线程继续解析html。

6. 遇到内部js也是同理

7. 解析完html文件，形成了完整的DOM树，也解析完了css，形成了完整的CSSOM树，两者结合形成了render树

8. 根据render树来进行布局，若在布局的过程中发生了元素尺寸、位置、隐藏的变化或增加、删除元素时，则进行回流，修改

9. 根据render树进行绘制，若在布局的过程中元素的外观发生变换，则进行重绘

10. 将布局、绘制得到的各个简单图层的位图发送给Browser进程，由它来合并简单图层为复合图层，从而显示到页面上

11. 以上步骤就是html文件解析全过程，完成之后，如若当页面有元素的尺寸、大小、隐藏有变化时，重新布局计算回流，并修改页面中所有受影响的部分，如若当页面有元素的外观发生变化时，重绘
```

--- 
参考文档：[https://cnblogs.com/caiyy/p/10406934.html](https://cnblogs.com/caiyy/p/10406934.html)


## 相关问题

### js是单线程为什么可以异步

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么Javascript不能有多个线程呢?这样能提高效率

Javascript的单线程，与它的用途有关。作为浏览器脚本语言，Javascript的主要用途是与用户交互，以及操作DOM。这决定它只能是单线程，否则会带来复杂的同步问题。比如，假定Javascript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以为了避免复杂性，从一诞生，Javascript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

**为了利用多多核CPU的计算能力，HTML5提出Web Worker标准，允许Javascript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以这个新标准并没有改变Javascript单线程的本质**

**依赖于js的事件循环机制，js的主线程虽然是单线程运行的，但是底层还是有其他线程的，比如说网络请求线程，事件执行线程等，主线程遇到上述说的异步任务就回去放到事件队列里面，并由对应的线程去执行，执行完成会返回给主线程，异步就是这样来的**

#### 怎样执行异步的代码

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

js引擎执行异步代码而不用等待，是因为有消息队列和事件循环。

- 消息队列：消息队列是一个先进先出的队列，它里面存放着各种消息。
- 事件循环：事件循环是指主线程重复从消息队列中取消息、执行的过程

实际上，主线程只会做一件事情，就是从消息队列里面读消息，再取消息，在执行。当消息队列为空时，就会等待直到消息队列变成非空。而且主线程只有在将当前的消息队列完成之后，才回去取下一个消息。这种机制叫做时间循环机制，取一个消息并执行的过程叫做一次循环

事件循环用代码表示大概这样
```
while(true) {
	var message = queue.get();
    execute(message);
}
```
那么，消息队列中放的消息具体是什么东西？消息的具体结构当然跟具体的实现有关了，但是为了简单起见，我们可以认为
 
- 消息就是注册异步任务时添加的回调函数

### HTML5 Web Workers

web worker是运行在后台的JavaScript,不会影响页面性能

**什么是Web Worker**

当在HTML页面中执行脚本时，页面的状态是不可响应的，知道脚本完成
web workder是运行在后台的JavaScript,独立于其他脚本，不会影响页面性能。您可以继续做任何愿意做的事情:点击、选取内容等等，而此时web worker在后台运行。

**浏览器支持**

Internet Explorer10，Firefox， chrome safari和Opera都支持

**HTML Web Worker实例**

```
//demo_worker.js文件代码
var i = 0;
function timedCount() {
	i = i + 1;
    postMessage(i);
    setTimeout('timedCount()', 500);
}
timedCount();

function startWorker(){
	if(typeof (Worker) !== 'undefined') {
    	if(typof(w) === undefined) {
        	w = new Worker('demo_workers.js');
        }
        w.onmessage = function(event) {
        	document.getElementById('result').innerHTML = event.data;
        }
    } else {
    	document.getElementById('result').innerHTML = '抱歉，你的浏览器不支持Web Workers...'
    }
}
function stopWorker() {
	w.terminate();
    w.undefined;
}
```

**Web Workers 和DOM**

由于web worker位于外部文件中，他们无法访问下列Javascript对象
1. window对象
2. document对象
3. parent对象

### MessageChannel通道

#### 初识MessageChannel对象

通过构造函数MessageChannel()可以创建一个消息通道，实例化的对象会继承两个属性：port1和port2
```
let ms = new MessageChannel();
//port1和port2都是MessagePort对象，在这里是只读的，无法对其进行字面量赋值
ms.port1 = {name: 'wise'}
//不过可以给port添加属性
ms.port1.name = 'wise'
```
MessagePort对象具有onmessage和onmessageerror两个属性

这是两个回调方法，使用MessagePort.postMessage方法发送消息的时候，就回去触发另一个端口onmessage

消息通道就想一条左右贯通的管道，左右两个端口就是port1和port2

这个端口可以相互发送消息，port1发送的消息可以在port2接收到哦，反之亦然。

<img :src="$withBase('/images/1059788-20190308164731842-1262102501.png')" alt="消息通道">

#### 多个Web Worker之间通信

MessageChannel可以结合Web Worker实现多线程通信
```
//mian.js
let worker1 = new Worker('./worker1.js');
let worker2 = new Worker('./worker2.js');

//把port1分配给worker1
worker1.postMessage('main', [ms.port1]);
//把port2分配给worker2
worker2.postMessage('main', [ms.port2]);
worker2.onmessage = function(event) {
	console.log(event.data);
}
```
这里的postMessage()可以接收两个参数message、transferList

- | -
--- | ---
message | 消息内容，可以是任意基础数据类型
transferList | 由被传输对象组成的数组，这些对象的所有权会转移给调用postMessage的对象

所以上面的代码，就是把消息通道的port1分配给了worker1，把port2分配给workerr2

也就是用消息通道，将两个worker给连接起来
```
//worker1.js
onmessage = function(e) {
	if(e.date === 'main') {
    	const port = e.ports[0];
        port.postMessage('Hi!I am worker1')
    }
}
//worker2.js
onmessage = function(e) {
	if(e.data === 'main') {
    	const port = e.ports[0];
        port.onmessage = function(e) {
        	postMessage(e.data)
        }
    }
}
```
代码运行的时候，worker1中通过port1发送的消息，然后worker2就能从port2中接收到消息

#### 深拷贝

大部分需要深拷贝的场景，都可以使用下面代码
```
JSON.parse(JSON.stringify(object));
```
但是这种办法会忽略undefined、function、symbol和循环引用对象

而通过postMessage()方法传输的message参数是深拷贝的。

```
function deepClone(obj) {
	return new Promise(resolve => {
    	const { port1, port2 } = new MessageChannel();
        port2.onmessage = e => resolve(e.data);
        port1.postMessage(obj)
    })
}
//定义一个包含undefined的对象
let obj = {
	a: 'wise',
    b: undefined,
    c: {
    	d: 'wrong'
    }
}
//循环引用
obj.c.e = obj.c;
async function test() {
	const clone = await deepClone(obj);
    console.log(clone)
}
```
这个深拷贝只能解决undefined和循环引用对象的问题，对于Symbol和function依然束手无策