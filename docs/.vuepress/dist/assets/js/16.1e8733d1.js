(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{364:function(t,e,n){"use strict";n.r(e);var a=n(42),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"http协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" http协议")]),t._v(" "),n("h3",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("ol",[n("li",[t._v("无连接")]),t._v(" "),n("li",[t._v("无状态")]),t._v(" "),n("li",[t._v("简单快速")]),t._v(" "),n("li",[t._v("灵活")])]),t._v(" "),n("h3",{attrs:{id:"request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),n("h4",{attrs:{id:"请求行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),n("ul",[n("li",[t._v("Method\n"),n("ul",[n("li",[t._v("GET---请求获取Request-URI所标识的资源\n   - POST---在Request-URI所标识的资源后附加新的数据\n   - HEAD---请求获取由Request-URI所标识的资源的响应消息报头\n   - PUT---请求服务器存储一个资源，并用Request-URI作为其标识\n   - DELETE---请求服务器删除Request-URI所标识的资源\n   - TRACE---请求服务器回送收到的请求信息，主要用于测试或诊断\n   - CONNECT--- 保留将来使用\n   - OPTIONS---预检请求/请求查询服务器的性能，或者查询与资源相关的选项和需求")])])]),t._v(" "),n("li",[t._v("RequestUrl---https://www.baidu.com/img")]),t._v(" "),n("li",[t._v("HttpVersion--Http 1.1")])]),t._v(" "),n("h4",{attrs:{id:"消息报头"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消息报头"}},[t._v("#")]),t._v(" 消息报头")]),t._v(" "),n("ul",[n("li",[t._v("Accept--- 指定客户端接受哪些类型的信息/MIME\n"),n("ul",[n("li",[t._v("image/gif gif图片\n   - text/html html文本")])])]),t._v(" "),n("li",[t._v("Accept-Charset--- 客户端接受的字符集\n"),n("ul",[n("li",[t._v("gb2312中文字符\n   - iso-8859-1 西文字符集\n   - utf-8 多语言字符")])])]),t._v(" "),n("li",[t._v("Accept-Encoding----可接受的内容编码\n"),n("ul",[n("li",[t._v("gzip，deflate 压缩类型\n   - identity 默认")])])]),t._v(" "),n("li",[t._v("Accept-Language---指定一种自然语言--zh-cn")]),t._v(" "),n("li",[t._v("Authorization--- 证明客户端有权查看某个资源")]),t._v(" "),n("li",[t._v("Host--- 指定被请求资源的Internet主机和端口号--www.kaikeba.com:8080")]),t._v(" "),n("li",[t._v("User-Agent-用户代理\n"),n("ul",[n("li",[t._v("操作系统及版本\n   - CPU类型\n   - 浏览器及版本\n   -浏览器渲染引擎\n   - 浏览器语言\n   - 浏览器插件")])])]),t._v(" "),n("li",[t._v("Content-Type --- Body编码方式")])]),t._v(" "),n("h4",{attrs:{id:"请求正文-根据头部的content-type确定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求正文-根据头部的content-type确定"}},[t._v("#")]),t._v(" 请求正文--根据头部的Content-Type确定")]),t._v(" "),n("ul",[n("li",[t._v("application/x-www-form-urlencoded\n"),n("ul",[n("li",[t._v("title=test&sub%5B%5D=1\n   - 默认数据编码方式")])])]),t._v(" "),n("li",[t._v("application/json\n"),n("ul",[n("li",[t._v("序列化后的JSON字符串\n   - ajax")])])]),t._v(" "),n("li",[t._v("text/xml--- XML作为编码方式的远程调用规范")]),t._v(" "),n("li",[t._v("text/plain--数据以纯文本形式(text/json/html)进行编码")]),t._v(" "),n("li",[t._v("multipart/form-data\n"),n("ul",[n("li",[t._v("既有文本数据，又有文本等二进制数据\n   \t- WebKitFormBoundaryrGKCBY7qhFd3TrwA\n"),n("ul",[n("li",[t._v('Content-Dispostion:form-data;name="text"')]),t._v(" "),n("li",[t._v("title")]),t._v(" "),n("li",[t._v('Content-Dispositon:from-data;name="file";filename="chorme.png"')]),t._v(" "),n("li",[t._v("Content-type:image/png")]),t._v(" "),n("li",[t._v("PNG...content fo chrome.png...\n   - 允许在数据中包含整个文件，所以常用于文件上传")])])])])])]),t._v(" "),n("h3",{attrs:{id:"response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),n("h4",{attrs:{id:"状态行-状态码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状态行-状态码"}},[t._v("#")]),t._v(" 状态行--状态码")]),t._v(" "),n("ul",[n("li",[t._v("1xx---指示消息--表示请求已接受，继续处理")]),t._v(" "),n("li",[t._v("2xx---成功--表示请求已被成功接收、理解、接受\n"),n("ul",[n("li",[t._v("200 ok 请求成功\n   - 206 客户端发送一个带Range头的GET请求 服务器完成")])])]),t._v(" "),n("li",[t._v("3xx---重定向--要完成请求必须进行更进一步操作\n"),n("ul",[n("li",[t._v("301 所有请求页面转移到URL\n   - 302 所有请求转移到临时重定向")])])]),t._v(" "),n("li",[t._v("4xx---客户端错误--请求有语法错误或请求无法实现\n"),n("ul",[n("li",[t._v("400 Bad Request 客户端请求有语法错误，不能被服务器所理解\n   - 401 Unauthorized 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用\n   - 403 Forbidden 服务器收到请求，但是拒绝提供服务\n   - 404 Not Fount 请求资源不存在，eg:输入了错误的URL")])])]),t._v(" "),n("li",[t._v("5xx---服务的错误--服务器未能实现合法的请求\n"),n("ul",[n("li",[t._v("500 Internal Server Error 服务器发生不可预期的错误\n   - 503 Server Unavailable 服务器当前不能处理客户端的请求，一段时间后可能恢复请求")])])])]),t._v(" "),n("h4",{attrs:{id:"消息报头-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消息报头-2"}},[t._v("#")]),t._v(" 消息报头")]),t._v(" "),n("ul",[n("li",[t._v("响应报头\n"),n("ul",[n("li",[t._v("Location 重定向接受者到一个新的位置\n   - WWW-Authenticate 包含在401(未授权)响应信息中，客户端收到401响应消息的时候，并发送Authorzation报头域请求服务器对其进行验证时，服务的响应报头就包含该报头域\n   - Server 包含了服务器用来处理请求的软件信息 -- Apache-Coyote/1.1")])])]),t._v(" "),n("li",[t._v("实体报头")]),t._v(" "),n("li",[t._v("Content-Encoding 媒体类型的修饰符 eg：Content-Encoding:gzip")]),t._v(" "),n("li",[t._v("Content-Language 资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读")]),t._v(" "),n("li",[t._v("Content-Length 正文长度，以字节方式存储的十进制数字来表示")]),t._v(" "),n("li",[t._v("Content-Type 实体报头域用于指名发送接受者的实体正文的媒体类型\n"),n("ul",[n("li",[t._v("text/html;chartset=UTF-8")]),t._v(" "),n("li",[t._v("application/json;charset=UTF-8\n   - "),n("a",{attrs:{href:"https://tool.oschina.net/commons/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细列表"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("POST")])])]),t._v(" "),n("li",[t._v("Expires 响应过期的日期和时间\n"),n("ul",[n("li",[t._v("为了让代理服务器或浏览器在一段时间以后更新缓存中(再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载)的页面\n   - 无缓存 response.setDateHeader('Expires', '0');")])])])]),t._v(" "),n("h4",{attrs:{id:"响应正文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应正文"}},[t._v("#")]),t._v(" 响应正文")]),t._v(" "),n("h2",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),n("ul",[n("li",[t._v("Get和Post的区别\n"),n("ul",[n("li",[t._v("GET回退无害化 POST会再次提交\n   - Get产生URL地址收藏 Post不可以\n   - GET请求会被浏览器主动缓存\n   - GET请求需要URL编码\n   - Get请求长度有限制\n   - Get参数通过URL传递 Post放在Request Body中")])])])]),t._v(" "),n("h3",{attrs:{id:"restful风格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restful风格"}},[t._v("#")]),t._v(" Restful风格")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("每一个URI代表一中资源 http://kaikeba.com/coures")])]),t._v(" "),n("li",[n("p",[t._v("客户端和服务器之间，传递这种自愿的某种表现层")])]),t._v(" "),n("li",[n("p",[t._v("表现层状态转化 URL设计 动宾结构")]),t._v(" "),n("ul",[n("li",[t._v("动词\n   \t- GET 读取\n       - Post 新建\n       - PUT 更新\n       - DELETE 删除\n   - 宾语\n   \t- 名词\n- GET /users --- 推荐"),n("br"),t._v("\n           - GET /getUsers --- 不推荐\n       - 复数\n       \t- GET /users /users/1 ---推荐\n           - GET /user /user/1 ---不推荐\n       - 避免多级\n       \t- GET /authors/12?categories=2\n- GET /authors/12/categories/2")])])]),t._v(" "),n("li",[n("p",[t._v("状态码")]),t._v(" "),n("ul",[n("li",[t._v("1xx 相关信息\n   - 2xx 操作成功\n   - 3xx 重定向\n   - 4xx 客户端错误\n   - 5xx 服务器错误")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);