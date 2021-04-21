---
title: session和cookie区别
---

## 概念理解
首先，要了解session和cookie的区别先要了解以下几个概念
1. 无状态的HTTP协议

协议，是指计算机通信网络中两台计算机之间进行通信所必须遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(html)文档从WEB服务器传送到客户端浏览器

HTTP协议是无状态的协议。一旦数据交换完毕，客户端与服务端的连接就会关闭，再次交换数据需要重新建立新的了解。**这就意味着服务器无法从连接上跟踪会话**。

<img :src="$withBase('/images/14132861-cdc994a3d941704a.webp')" alt="无状态的协议">

> 我们浏览网页使用的HTTP协议是无状态的协议，就是说网页一关闭，浏览器和服务端的连接就会断开，下次打开网页又要重新连接，服务器无法从你一打开的连接上恢复上一次的会话，服务器不知道是你又回来了。

2. 会话跟踪

会话，指用户登录网站后的一系列动作，比如浏览商品添加到购物车并购买。会话跟踪是Web程序中常用的技术，用来**跟踪用户的整个会话**。常会的会话跟踪技术是Cookie和Session。**Cookie通过客户端记录信息确定用户身份，Session通过服务端记录信息确定用户身份**。

<img :src="$withBase('/images/14132861-902a9c7a3c06e7c7.webp')" alt="cookie">

<img :src="$withBase('/images/14132861-0315933382a55fd4.webp')" alt="session">
## Cookie

由于HTTP是一种无状态的协议，服务器单从网络连接无从知道客户身份。用户A购买了一件商品放入购物车内，当再次购买商品时已经无法判断该购买行为是属于用户A的会话还是用户B的会话了。怎么办呢？就给客户端颁发一个通行证，每人一个，无论是谁访问都必须携带自己的通行证，这样服务器就能从通行证上确定客户身份了。这就是Cookie的工作原理。

<img :src="$withBase('/imaages/14132861-bb3a8a004103cf52.webp')" alt="cookie工作原理">

> 我们之前把你的信息记录在cookie里，在你打开网页和服务器建立连接的时候，把cookie记录的你的信息一起发送给服务器，这样服务器就能从cookie接收到的信息里识别你的身份，让页面为你提供特别属于你的内容

<img :src="$withBase('/images/14132861-6d283af6209bd245.webp')" alt="cookie请求">

我们访问浏览器的时候，浏览器会发送一个HTTP请求到服务器端；

服务器会发送一个HTTP响应到客户端，其中包括Sst-Cookie，意思就是浏览器建立一个cookie保存服务器指定的内容，比如用户信息和用户操作信息；

浏览器保存好信息之后，下次我们再次访问网站的时候，浏览器再发送HTTP请求到服务器端时都会携带之前保存的cookie；

服务器端会从收到的cookie中识别用户身份，就能让页面为你提供专门属于你的内容了

![cookie存储大小限制](http://upload-images.jianshu.io/upload_images/14132861-ff1c907eb03493fc.png?imageMogr2/auto-orient/strip|imageView2/2/w/399/format/webp)

<img :src="$withBase('/images/14132861-a4b75bbbebabff3a.webp')" alt="安全性不高">

1. 会话cookie和持久cookie

若不设置过期时间，则表示这个cookie的生命周期为浏览器的会话期间，关闭浏览器窗口，cookie就消失。这种生命期为浏览器会话期的cookie称为会话cookie，会话cookie一般不存储在硬盘上而是保存在内存里，当然这种行为并不苏规范规定的。

若设置了过期时间，浏览器就会把cookie保存在硬盘上，关闭后再次打开浏览器，这些cookie仍然有效指导超过过期时间。称为持久cookie

2. Cookie具有不可跨域名性

就是说，浏览器访问百度不会带上谷歌的cookie

## Session

Session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而Session保存在浏览器上，客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是Session；客户端浏览器再次访问只需要从该Session中查找该用户的状态就可以了。

![客户端访问服务器](https://upload-images.jianshu.io/upload_images/14132861-deab5c1d1f3c543a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

客户端浏览器访问网站的时候

![服务器想浏览器发送sessionId](https://upload-images.jianshu.io/upload_images/14132861-a887f8b52f3f964b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

服务器会向客户浏览器发送一个每个用户特有的会话编号sessionID，让他进入到cookie里。

![服务器记录](https://upload-images.jianshu.io/upload_images/14132861-bd568fb2f065be4b.png?imageMogr2/auto-orient/strip|imageView2/2/w/742/format/webp)

服务器同时也把sessionID和对应的用户信息、用户操作记录在服务器上，这些记录就是session。

![在此访问](https://upload-images.jianshu.io/upload_images/14132861-c6ce87da19f62e21.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

客户端浏览器再次访问时，会发送cookie给服务器，其中就包含sessionID。

![返送内容](https://upload-images.jianshu.io/upload_images/14132861-4920c5e1e6415c05.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

服务器从cookie里找到sessionID，再根据sessionID找到以前记录的用户信息就可以知道他之前操控些、访问过哪里。

![安全系数高](http://upload-images.jianshu.io/upload_images/14132861-48cfc34491f5aaac.png?imageMogr2/auto-orient/strip|imageView2/2/w/885/format/webp)

## 总结

1. Cookie数据存放在客户的浏览器上，session数据存放在服务器上
2. Cookie不是很安全，别人可以分析存放在本地的cookie并进行欺骗，考虑到安全应该使用session
3. Session会在一定事件内保存在服务器上，当访问增多，会比较占用你的服务器性能，考虑奸情服务器性能压力，应当使用cookie
4. 单个cookie保存数据不能超时4k,很多浏览器限制一个站点最多保存20个Cookie
5. 可以考虑将登陆信息等重要的信息存放在session，其他信息如果需要保留，可以放在cookie中


## ajax请求携带cookie、自定义header总结
```
错误：
1.ajax请求时是不会自动带上cookie的，要是想让他带上的话，必须设置withCredential为true。

正确：
1.ajax同域请求下，ajax会自动带上同源的cookie；

2.ajax同域请求下，ajax添加自定义请求头（或原装）header，前端、后台不需要增加任何配置，
并且不会因为增加自定义请求头header，而引起预检查请求（options）;

3.ajax跨域请求下，如果不需要携带cookie、请求头header，只需要在后台配置相应参数即可；
	后台参数：
	（1）.Access-Control-Allow-Origin：设置允许跨域的配置， 响应头指定了该响应的资源是否被允许与给定的origin共享；

4.ajax跨域请求下，ajax不会自动携带同源的cookie，需要通过前端配置相应参数才可以跨域携带同源cookie，后台配置相应参数才可以跨域返回同源cookie；
前端参数：
	withCredentials: true(发送Ajax时，Request header中会带上Cookie信息)
后台参数：
	（1）.Access-Control-Allow-Origin：设置允许跨域的配置， 响应头指定了该响应的资源是否被允许与给定的origin共享；
		特别说明：配置了Access-Control-Allow-Credentials:true则不能把Access-Control-Allow-Origin设置为通配符*；
	（2）.Access-Control-Allow-Credentials：响应头表示是否可以将对请求的响应暴露给页面（cookie）。返回true则可以，其他值均不可以。
	
5.ajax请求任何时候都不会带上不同源的cookie（Cookie遵循同源策略）；

6.ajax跨域请求下，ajax添加自定义或者原装的请求头，请求会发送两次，第一次预检查请求，第二次正常请求，详细描述：
post（或GET）跨域请求时，分为简单请求和复杂请求，跨域携带自定义或者原装请求头头时是复杂请求。
复杂请求会先发送一个method 为option的请求，目的是试探服务器是否接受发起的请求. 如果服务器说可以，再进行post（或GET）请求。
对于java后台web应用，跨域需要添加一个过滤器（过滤器详见下面案例代码），这个过滤器做的事就是，加了几个http header在返回中，
Access-Control-Allow-Origin 我能接受的跨域请求来源，配置主机名
Access-Control-Allow-Headers 表示能接受的http头部，别忘了加入你自己发明创造的头部
Access-Control-Allow-Methods 表示能接受的http mothed ，反正就那几种，全写上也无妨，猥琐点就只写 post, options
如果是OPTION返回空，设置返回码为202，202表示通过。
需要前端配置相应参数才可以跨域携带请求头，后台配置相应参数进行跨域携带请求头；
前端参数：
	crossDomain:true(发送Ajax时，Request header 中会包含跨域的额外信息，但不会含cookie（作用不明，不会影响请求头的携带）)
后台参数（配置预检查过滤器）：
	（1）Access-Control-Allow-Origin：设置允许跨域的配置， 响应头指定了该响应的资源是否被允许与给定的origin共享；
	（2）Access-Control-Allow-Credentials：响应头表示是否可以将对请求的响应暴露给页面（cookie）。返回true则可以，其他值均不可以；
	（3）Access-Control-Allow-Headers:用于预检请求中，列出了将会在正式请求的 Access-Control-Request-Headers 字段中出现的首部信息。（自定义请求头）；
	（4）Access-Control-Allow-Methods：在对预检请求的应答中明确了客户端所要访问的资源允许使用的方法或方法列表；


亲测小结论：
1.ajax跨域请求下，后台不配置跨域Access-Control-Allow-Origin，同样能够执行后台方法，但是无法执行ajax的success的方法，控制台报跨域错误；
2.ajax跨域请求下，前端配置withCredentials: false,同样能够执行后台方法，但是无法携带同源cookie，后台无法获取；
3.ajax跨域请求下，前端配置withCredentials: true，后端没有配置Access-Control-Allow-Credentials:true，同样能够执行后台方法，并能够生成cookie并返回浏览器，但是无法执行ajax的success的方法，控制台报跨域错误；
4.ajax跨域请求下，前端配置withCredentials: false或不配置withCredentials，后端配置Access-Control-Allow-Credentials:true或者false，同样能够执行后台方法，并能够生成cookie并返回浏览器，但是无法携带同源cookie，能够执行ajax的success的方法；
5.Cookie携带只区分域名，不区分端口；
6.jsonp可以携带cookie，但只能携带所属域名的cookie（同源策略）；
7.jsonp可以跨域生成cookie，流程如下：跨域请求之后，在服务器端生成cookie，并在浏览器端记录相应的cookie；
8.静态资源同样会携带cookie（js和图片等），但是如果是和当前页面不同域只是在network中不显示cookie选项，但是后台能够获取到对应cookie；
9.ajax同域请求会自动带上同源的cookie，不会带上不同源的cookie；
10.这是MDN对withCredentials的解释： MDN-withCredentials ，我接着解释一下同源。
众所周知，ajax请求是有同源策略的，虽然可以应用CORS等手段来实现跨域，但是这并不是说这样就是“同源”了。ajax在请求时就会因为这个同源的问题而决定是否带上cookie，这样解释应该没有问题了吧，还不知道同源策略的，应该去谷歌一下看看。

总结：最好前端后台配置跨域，则同时配置相应的跨域配置，否则总会出现不可控的错误；
————————————————
https://blog.csdn.net/menghuanzhiming/java/article/details/102736312
```
## 跨域相关

<img :src="$withBase('/images/16103039-e0607376729c4421bb36540269c4c219.png')" alt="跨域图片">

JavaScript出于安全方面考虑，不允许跨域调用其他页面的对象。但在安全限制的同时也给注入iframe或ajax应用上带来了不少麻烦。

什么是跨域？简单的理解就是因为Javascript同源策略的限制，a.com域名下的js无法操作b.com或是c.a.com域名下的对象。更详细的说明可以看下表


URL | 说明 | 是否允许通信
---|--- | ---
http://www.a.com/a.js<br/>http://www.a.com/b.js | 同一域名下 | 允许
http://www.a.com/lab/a.js<br/>http://www.a.com/script/b.js | 同一域名下不同文件夹 | 允许
http://www.a.com:8080/a.js<br/>http://www.a.com/b.js | 同一域名,不同端口 | 不允许
http://www.a.com/a.js<br/>https://www.a.com/b.js | 同一域名,不同协议 | 不允许
http://www.a.com/a.js<br/>http://70.32.92.74/b.js | 域名和域名对应IP | 不允许
http://www.a.com/a.js<br/>http://script.a.com/b.js | 主域相同，子域不同 | 不允许
http://www.a.com/a.js<br/>http://a.com/b.js | 同一域名，不同二级域名 | 不允许
http://www.cnblogs.com/a.js<br/>http://a.com/b.js | 不同域名 | 不允许