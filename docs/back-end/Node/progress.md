---
title: Nodejs进程间通信
---


## Nodejs进程间通信

### 场景

Node运行在单线程下，但这并不意味着无法利用多核/多机下多进程的优势

### 创建进程

通信方式与进程产生方式有关，而Node有4种创建的方式:spawn(),exec(), execFile()和fork()

##### spawn

```
const { spawn } = require('child_process');
const child = spawn('pwd');
//带参数的形式
//const child = spawn('find', ['.', '-type', 'f']);
```
spawn()返回ChildProcess实例，ChildProcess同样基于事件机制(EventEmitter API),提供了一些事件：
- exit:子进程退出时触发，可以得知进程退出状态(code和signal)
- disconnect:父进程调用child.disconnect()触发
- error:子进程创建失败，或被kill时触发
- close:子进程的stdio流(标准输入输出流)关闭时触发
- message:子进程通过process.send()发送消息时触发，父子进程之间通过这种内置的消息机制通信

可以通过child.stdin, child.stdout和child.stderr访问子进程的stdio流，这些流被关闭时，子进程会触发close事件

P.S.close和exit的区别主要体现在多进程共享同一stdio流的场景，某个进程退出了并不意味着stdio流被关闭了

在子进程中，stdout/stderr具有Readable特性，而stdin具有Writable特性，与主进程情况正好相反
```
child.stout.on('data', (data) => {
	console.log(`child stdout: \n${data}`);
})
child.stderr.on('data', (data) => {
	console.error(`child stderr:\n${data}`)
})
```
利用进程stdio流的管道特性，就可以完成更复杂的事情，例如：
```
const { spawn } = require('child_process');
const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-1']);
find.stdout.pipe(wc.stdin);
wc.stdout.on('data', (data) => {
	console.log(`Number of files ${data}`);
})
```
作用等价于find . -type f | wc -1 ，递归统计当前目录文件数量

#### IPC选项

另外，通过spawn()方法的stdio选项可以建立IPC机制：
```
const { spawn } = require('child_process');
const child = spawn('node', ['./ipc-child.js'], {stdio: [null, null, null, 'ipc']});
child.on('message', (m) => {
	console.log(m);
})
child.send('Here Here');
process.on('message', (m) => {
	process.send(`< ${m}`);
    process.send('> 不要回答x3')
})
```

#### exec

spawn()方法默认不会创建shell去执行传入的命令(所以性能上稍微好一点)，而exec()方法会创建一个shell。另外,exec()不是基于stream的，而是把传入命令的执行结果暂存到buffer中，在整个传递给回调函数。

exec()方法的特点就是完全支持shell语法，可以直接传入任意shell脚本
```
const { exec } = require('child_process');
exec('find . -type f | wc -l',(err, stdout, stderr) => {
	if (err) {
    	console.error(`exec error: ${err}`);
        return;
    }
    console.log(`Number of files ${stdout}`);
})
```
但exec()方法也因此存在命令注入的安全风险，在含有用户输入等动态内容的场景要特别注意。所以，exec()方法的适用场景是：希望直接使用shell语法，并且预期输出数据量不大(不存在内存压力)

那么，有没有即支持shell语法，还具有stream IO优势的方式？

有！两全其美的方式如下

```
const { spawn } = require('child_process');
const child = spawn('find . -type f | wc -l', {
	shell: true
});
child.stdout.pipe(process.stdout);
```
开启spawn()的shell选项，并通过pipe()方法把子进程的标准输出简单地接到当前进程的标准输入上，以便看到命令执行结果。实际上还有更容易的方式
```
const { spawn } = require('child_process');
process.stdout.on('data', (data) => {
	console.log(data);
})
const child = spawn('find . -type f | wc -l', {
	shell: true,
    stdio: 'inherit'
})
```
stdio:'inherit'允许子进程继承当前进程的标准输入输出(共享stdin, stdout和stderr).所以上例能够通过监听当前进程process.stdout的data事件拿到子进程的输出结果

另外，除了stdio和shell选项，spawn()还支持一些其他选项。如：
```
const child = spawn('find . -type f | wc -l', {
	stdio：'inherit',
    shell: true,
    //修改环境变量，默认process.env
    env: { HOME: '/tmp/xxx' },
    //改变当前工作目录
    cwd: '/tmp', 
    //作为独立进程存在
    datached: true;
})

```

注意，env选项除了以环境变量形式向子进程传递数据外,还可以用来实现沙箱式的环境变量隔离，默认把process.env作为子进程的环境变量集，子进程与当前进程一样能够访问所有环境变量，如果像上例中指定自定义对象作为子进程的环境变量集，子进程就无法访问其他环境变量

所以，想要增/删环境变量的话，需要这样做
```
var spawn_env = JSON.parse(JSON.stringify(process.env));
//remove those env vars
delete spawn_env.ATOM_SHELL_INTERNAL_RUN_AS_NODE;
delete spawn_env.ELECTRON_RUNN_AD_NODE;
var sp = spawn(command, [.], [cwd: cwd, env: spawn_env])
```
detached选项更有意思
```
const { spawn } = require('child_process');
const child = spawn('node', ['stuff.js'], {
	detaached: true, 
    stdio: 'ignore'
})
child..unref();
```
以这种方式创建的独立进程行为取决有操作系统，windows上detached子进程将拥有自己的console窗口，而linux上该进程会创建新的process group(这个特性可以用来管理子进程族，实现类似于tree-kill特性)

unref方法用来断绝关系，这样父进程可以独立退出(不会导致子进程跟着退出)，但要注意这时子进程的stdio也应该独立于父进程，否则父进程退出后子进程仍会收到影响

#### execFile

## postMessage

### MDN window.postMessage

[mdn地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

window.postMessage()方法可以安全的实现跨源通信。通常，对于两个不同页面的脚本，只有当执行他们的页面位于具有相同的协议(https)，端口号(443为)以及主机(两个页面的模数Document.domain设置为相同值)时，这两个脚本才能通信。window.postMessage()方法提供了一种受控机制来规避此限制，只要很正确使用，这种方法就很安全

从广义上讲，一个窗口可以获得对另一个窗口的引用(比如targetWindow = window.openner),然后在窗口上调用targetWindow.postMessage()方法分发一个Message消息。接收消息的窗口可以根据需要自由处理此事件。传递给window.postMessage()的参数(比如message)将通过消息事件对象暴露给接收消息的窗口。

##### 语法

```
otherWindos.postMessage(message, targetOrigin, [transfer]);
```
**OtherWindow**

其他窗口的一个引用，比如iframe的contentWindow属性、执行window.open返回的窗口对象，或者是命名过或数值索引的window.frames;

**message**

将要发送哦到其他window的数据，它将会被结构化克隆算法序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。

**targetOrigin**

通过窗口的origin属性来指定那些窗口能接收到消息事件，其值可以是字符串"*" (表示无限制)或一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会发送；只有三者匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口；例如：当用postMessage传送密码时，这个参数就显得尤为重要，必须保证它的值与这条包含密码的信息的预期接受者的origin属性完全一致，来防止密码被恶意的地方法截获。如果你明确的知道消息应该发送到哪个窗口，那么请始终提供一个有明确值的targetOrigin，而不是"*"。不提供确切的目标将导致数据泄露到任何对数据感兴趣的恶意站点

**transfer**

可选，是一串和message同时传递的Transferable对象。这些对象的所有权将被转移给消息的接收方，而发送你一方将不再抱有所有权。

##### The dispatched event

执行如下代码，其他window可以监听分发的message
```
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
	//var origin = event.origin || event.originalEvent.origin
    var origin = event.origin;
    if(origin !== 'http://example.org:8080') return;
}
```

message的属性有

**data**

从其他window中传递过来的对象。

**origin**
调用postMessage时消息发送方窗口的origin.这个字符串由协议、域名、端口号拼接而成。例如：'https://example.org'(隐含端口443)、'http://example.net(隐含端口80)'、'http://example.com:8080'。请注意，这个origin不能保证是该窗口的当前或未来origin，因为postMessage被调用后可能被导航到不同的位置

**source**

对发送消息的窗口对象的引用；您可以使用此来在具有不同origin的两个川南关口之间建立双向通信


### 基础夯实---postMessage

平时工作中可能会碰到类似的需求:在当前页面打开一个新的窗口，当这个新窗口的页面中数据发生变化时，需要对上一个窗口的页面状态进行一些调整

上面的这个需求与事件监听非常类似，都是触发了某个事件时执行某个动作。但是一般这种监听(或者订阅、广播)都只能在一个页面内，并不能够跨窗口

那么不通过监听，该如何实现两个窗口之间的通信呢？

##### postMessage方法

在html5，window对象上有一个方法叫做postMessage,和它的名字一样，这个方法就是用来发送消息的，但是它只能在两个窗口之间发送消息

```
win.postMessage(data, origin);
//win这个参数需要接受消息的window对象
//当我们通过window.open()打开一个新窗口时，会返回一个新窗口的window对象，通过这个新窗口的window对象，就可以向新窗口发送消息
//如果页面中有frame时，也可以通过这个frame对象发送消息

//data为我们想要发送的数据,理论上data可以是任何可以被复制的数据类型，但是由于部分浏览器只支持传输String类型，所以传输的数据最好是通过JSON.stringify()序列化后在传输

//origin为字符串，为目标窗口的源，由协议+ip/域名+端口组成
//如果想要传递给任意窗口，可以将这个参数设置为*，为了安全起见，不建议设置为*
//如果目标窗口与当前窗口同源，则设置为'/'
```
知道了如何使用postMessage方法，那么又该如何实现数据的接受呢？
```
window.addEventListener('message', function(e) {....})

//第一个参数为这个事件监听器的类型,'message'表示会监听当前窗口接收到的消息
//第二个参数为接收到消息后的回调函数，在回调函数中，我们可以对发送消息的源进行一些验证，从而保证安全性
//回调函数参数e 上有很多属性，我们将其打印出来，其中origin表示发送消息窗口的源；source属性表示发送消息的窗口，通过e.source==window.opener可以判断发送消息的窗口与当前页面的窗口是否为同一个；data属性表述传递过来的数据
```
消息的发送与接收并不难，那么下面就来实现以下文章开篇提出来需求

superWindow.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>super window</title>
</head>
<body>

<h3>super window</h3>
<p id="message"></p>

<a href="javascript:;" id="post">打开新窗口并监听消息</a>

<script>

    document.getElementById('post').onclick = function () {
        // 打开一个新窗口
        var subWindow = window.open('subWindow.html')
        // 监听 message 事件
        window.addEventListener('message', function (e) {
            console.log(e)
            // 校验发送消息的窗口的源
            if (e.origin != 'http://192.168.1.101:8081') return
            document.getElementById('message').innerText = e.data
        } )
    }

</script>
</body>
</html>
```
subWindow.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>sub window</title>
</head>
<body>

<h3>sub window</h3>

<script>

    // 通过 window.opener 获取到打开当前窗口的窗口，即 super window
    // 由于当前是同源窗口传递消息，所以第二个参数设为 /
    window.opener.postMessage('super window 接收到了一条消息', '/')
    
</script>
</body>
</html>
```
**跨域**

postMessage还有一个重要的特性就是跨域，将第二个参数设置为其他的源，就可以实现两个不同域网站的通信

[另一参考文档](https://www.webhek.com/post/window-postmessage-api.html)


## MessageChannel

ChannelMessaging API的MessageChannel接口允许我们创建一个新的消息通道，并通过它的两个MessagePort属性发送数据

#### 属性

- MessageChannel.port1-只读，返回channel的port1
- MessageChannel.port2-只读，返回channel的port2

#### 构造函数

MessageChannel()-返回一个带有两个MessagePort属性的MessageChannel新对象

#### 示例

在以下代码块中，您可以看到使用MessageChannel构造函数实例化了一个channel对象。当iframe加载完毕，我们使用MessagePort.postMessage方法把一条消息和MessageChannel.port2传递给iframe。handleMessage处理程序将会从iframe中(使用MessagePort.onmessage监听事件)接收到消息，将数据放入innerHTML中。

```
var channel = new MessageChannel();
var para = document.querySelector('p');

var ifr = document.queryselector('iframe');
var otherWindow = ifr.contentWindow;

ifr.addEventListener('load', iframeLoaded, false);

function iframeLoaded(){
	otherWindow.postMesaage('Hello from the main page!', '*', [channel.port2]);
}
channel.port1.onmessage = handleMessage;

function handleMessage(e) {
	para.innerHTML = e.data;
}
```