---
title: 网络编程/http协议相关
---

## http协议
### 概述
1. 无连接
2. 无状态
3. 简单快速
4. 灵活

### Request
#### 请求行
- Method
	- GET---请求获取Request-URI所标识的资源
    - POST---在Request-URI所标识的资源后附加新的数据
    - HEAD---请求获取由Request-URI所标识的资源的响应消息报头
    - PUT---请求服务器存储一个资源，并用Request-URI作为其标识
    - DELETE---请求服务器删除Request-URI所标识的资源
    - TRACE---请求服务器回送收到的请求信息，主要用于测试或诊断
    - CONNECT--- 保留将来使用
    - OPTIONS---预检请求/请求查询服务器的性能，或者查询与资源相关的选项和需求
- RequestUrl---https://www.baidu.com/img
- HttpVersion--Http 1.1

#### 消息报头
- Accept--- 指定客户端接受哪些类型的信息/MIME
	- image/gif gif图片
    - text/html html文本
- Accept-Charset--- 客户端接受的字符集
	- gb2312中文字符
    - iso-8859-1 西文字符集
    - utf-8 多语言字符
- Accept-Encoding----可接受的内容编码
	- gzip，deflate 压缩类型
    - identity 默认
- Accept-Language---指定一种自然语言--zh-cn
- Authorization--- 证明客户端有权查看某个资源
- Host--- 指定被请求资源的Internet主机和端口号--www.kaikeba.com:8080
- User-Agent-用户代理
	- 操作系统及版本
    - CPU类型
    - 浏览器及版本
    -浏览器渲染引擎
    - 浏览器语言
    - 浏览器插件
- Content-Type --- Body编码方式

#### 请求正文--根据头部的Content-Type确定
- application/x-www-form-urlencoded
	- title=test&sub%5B%5D=1
    - 默认数据编码方式
- application/json
	- 序列化后的JSON字符串
    - ajax
- text/xml--- XML作为编码方式的远程调用规范
- text/plain--数据以纯文本形式(text/json/html)进行编码
- multipart/form-data
	- 既有文本数据，又有文本等二进制数据
    	- WebKitFormBoundaryrGKCBY7qhFd3TrwA
        - Content-Dispostion:form-data;name="text"
        - title
        - Content-Dispositon:from-data;name="file";filename="chorme.png"
        - Content-type:image/png
        - PNG...content fo chrome.png...
    - 允许在数据中包含整个文件，所以常用于文件上传

### Response

#### 状态行--状态码
- 1xx---指示消息--表示请求已接受，继续处理
- 2xx---成功--表示请求已被成功接收、理解、接受
	- 200 ok 请求成功
    - 206 客户端发送一个带Range头的GET请求 服务器完成
- 3xx---重定向--要完成请求必须进行更进一步操作
	- 301 所有请求页面转移到URL
    - 302 所有请求转移到临时重定向
- 4xx---客户端错误--请求有语法错误或请求无法实现
	- 400 Bad Request 客户端请求有语法错误，不能被服务器所理解
    - 401 Unauthorized 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
    - 403 Forbidden 服务器收到请求，但是拒绝提供服务
    - 404 Not Fount 请求资源不存在，eg:输入了错误的URL
- 5xx---服务的错误--服务器未能实现合法的请求
	- 500 Internal Server Error 服务器发生不可预期的错误
    - 503 Server Unavailable 服务器当前不能处理客户端的请求，一段时间后可能恢复请求

#### 消息报头
- 响应报头
	- Location 重定向接受者到一个新的位置
    - WWW-Authenticate 包含在401(未授权)响应信息中，客户端收到401响应消息的时候，并发送Authorzation报头域请求服务器对其进行验证时，服务的响应报头就包含该报头域
    - Server 包含了服务器用来处理请求的软件信息 -- Apache-Coyote/1.1
- 实体报头
- Content-Encoding 媒体类型的修饰符 eg：Content-Encoding:gzip
- Content-Language 资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读
- Content-Length 正文长度，以字节方式存储的十进制数字来表示
- Content-Type 实体报头域用于指名发送接受者的实体正文的媒体类型
	- text/html;chartset=UTF-8
    - application/json;charset=UTF-8
    - [详细列表](https://tool.oschina.net/commons/)
    - POST
- Expires 响应过期的日期和时间
	- 为了让代理服务器或浏览器在一段时间以后更新缓存中(再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载)的页面
    - 无缓存 response.setDateHeader('Expires', '0');

#### 响应正文


## 其他
+ Get和Post的区别
	- GET回退无害化 POST会再次提交
    - Get产生URL地址收藏 Post不可以
    - GET请求会被浏览器主动缓存
    - GET请求需要URL编码
    - Get请求长度有限制
    - Get参数通过URL传递 Post放在Request Body中


### Restful风格
- 每一个URI代表一中资源 http://kaikeba.com/coures
- 客户端和服务器之间，传递这种自愿的某种表现层
- 表现层状态转化 URL设计 动宾结构
	- 动词
        - GET 读取
        - Post 新建
        - PUT 更新
        - DELETE 删除
    - 宾语
        - 名词 
        	- GET /users --- 推荐
            - GET /getUsers --- 不推荐
        - 复数
            - GET /users /users/1 ---推荐
            - GET /user /user/1 ---不推荐
        - 避免多级
            - GET /authors/12?categories=2
            - GET /authors/12/categories/2
       
- 状态码
	- 1xx 相关信息
    - 2xx 操作成功
    - 3xx 重定向
    - 4xx 客户端错误
    - 5xx 服务器错误