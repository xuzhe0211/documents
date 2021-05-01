---
autoGroup-5: ES6
title: ES6、ES7、ES8、ES10新特性一览
---

## ES6新特性(2015)

ES6的特性比较多，在ES5发布近6年(2019-11到2015-6)之后才将其标准化。两个发布版本之间时间跨度很大，在ES6中的特性比较多。在这里列举几个常用的

+ 类
+ 模块化
+ 箭头函数
+ 函数参数默认值
+ 模板字符串
+ 结构赋值
+ 延展操作符
+ 对象属性简写
+ promise
+ Let与const

### 类

对熟悉Java，object-c，c#等纯面相对象语言的开发者来说，都会对class有一种特殊的情怀。ES6引入了class(类)，让JavaScript的面相对象编程变得更加简单和易于理解

```
class Animal {
    // 构造函数，实例化的时候会被调用，如果不指定，那么会有一个不带参数的默认构造函数
    constructor(name, color) {
        this.name = name; 
        this.color = color;
    }
    // toString是原型上的属性
    toString() {
        console.log(`name: ${this.name},color:${this.color}`);
    }
}
var animal = new Animal('dog', 'white'); // 实例化Animal
animal.toString();
console.log(animal.hasOwnProperty('name')); // true
console.log(animal.hasOwnProperty('toString')); //false
console.log(animal.__proto__.hasOwnProperty('toString')) // true

class Cat extends Animal{
    // 子类必须要在constructor中指定super函数，否在在新建实例的时候会报错
    // 如果没有指定的constructor,默认带super函数的constructor将会被添加
    constructor(action) {
        super('cat', 'white');
        this.action = action;
    }
    toString() {
        console.log(super.toString());
    }
}
var cat = new Cat('catch');
cat.toString() // 实例cat是Cat和Animal的实例，和ES5完全一致
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true
```

### 模块化

ES5不支持原生的模块化，在ES6中模块作为重要的组成部分被添加进来。模块的功能主要由export和import组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过export来规定模块对外暴露的接口，通过import来引用其他模块提供的接口。同时还未模块创造了命名空间，防止函数的命名冲突

#### 导出(export)

ES6允许在一个模块中使用export来导出多个变量或函数

##### 导出变量
```
// test.js
export var name = 'Rainbow'
```
> ES6不仅支持变量的导出，也支持厂里的导出。export const sqrt = Math.sqrt // 导出常量

ES6将一个文件视为一个模块，上面的模块通过export向外输出了一个变量。一个模块可以同时向外面输出多个变量。

```
// test.js
var name = 'Rainbow';
var age = '24';
export {name, age}
```

##### 导出函数

```
// myModule.js
export function myModule(someArg) {
    return someArg;
}
```

#### 导入(import)

定义好模块的输出以后就可以在另一个模块通过import引用。
```
// main.js
import {myModule} from 'myModule';

// test.js
import {name, age} from 'test';

```
> 一条import语句可以同时导入默认函数和其他变量 import defaultMethod, {otherMethod} from 'xxx.js'

### 箭头函数

=>不只是关键字function的简写，它还带来了其他好处。箭头函数与包围它的代码共享同一个this,能帮你很好的解决this的指向问题。有经验的JavaScript开发者都熟悉诸如var self = this; 或var that = this这种引用外围this的模式。但是借助=>，就不需要这种模式

#### 箭头函数结构
箭头函数的箭头=>之前是一个空括号、单个的参数名、或用括号括起的多个参数名，而箭头之后可以是一个表达式(作为函数的返回值)，或者是用花括号括起来的函数体(需要自行通过return来返回值，否则返回的是undefined)

```
// 箭头函数的例子
() => 1 
v=>v+1
(a,b)=>a+b ()=>{
    alert("foo");
}
e=>{
    if (e == 0){
        return 0;
    }
    return 1000/e;
}
```
> 不论是箭头函数还是bind，每次被执行都返回的是一个新的函数引用，因此如果你还需要函数的引用去做一些别的事情(譬如卸载监听器)，那么你必须自己保存这个引用

#### 卸载监听器时的陷阱

> 错误做法
```
class PauseMenu extends React.Component{
    componentWillMount(){
        AppStateIOS.addEventListener('change', this.onAppPaused.bind(this));
    }
    componentWillUnmount(){
        AppStateIOS.removeEventListener('change', this.onAppPaused.bind(this));
    }
    onAppPaused(event){     }
} 
```
> 正确做法

```
class PauseMenu extends React.Component{
    constructor(props){
        super(props);
        this._onAppPaused = this.onAppPaused.bind(this);
    }
    componentWillMount(){
        AppStateIOS.addEventListener('change', this._onAppPaused);
    }
    componentWillUnmount(){
        AppStateIOS.removeEventListener('change', this._onAppPaused);
    }
    onAppPaused(event){     }
}
// 除上述的做法外 还可以
class PauseMenu extends React.Component{
    componentWillMount(){
        AppStateIOS.addEventListener('change', this.onAppPaused);
    }
    componentWillUnmount(){
        AppStateIOS.removeEventListener('change', this.onAppPaused);
    }
    onAppPaused = (event) => {
        //把函数直接作为一个arrow function的属性来定义，初始化的时候就绑定好了this指针 
    }
} 
```

### 函数参数默认值

ES6支持在定义函数的时候为其设置默认值

```
function foo(height = 50, color = 'red') {}

// 不使用默认值
function foo(height, color) {
    var height = height || 50;
    var color = color || 'red';
}
```
不实用默认值这样写一般没问题，但当参数的布尔值为false时，就会有问题了；比如我们调用foo函数
```
foo(0, '')
```
因为0的布尔值为false, 这样height的取值将是50。同理color的取值为red

所以，函数参数默认值不仅是代码变得更简介而且能规避一些问题

### 模板字符串

ES6支持模板字符串，使得字符串的拼接更加简介、直观

> 不使用模板字符串

```
var name = 'Your name is' + first + ' ' + last + '.'
```

> 使用模板字符串

```
var name = `Your name is ${first} ${last}.`
```

### 解构赋值

解构赋值语法是JavaScript的一种表达式，可以方便的从数组或对象中快速提取值赋给定义的变量

#### 获取数组中的值

从数组中获取值并赋值到变量中，变量的顺序与数组的顺序对应。

```
var foo = ['one', 'two', 'three', 'four'];
var [one, two, three] = foo;
console.log(one, two, three); // 'one', 'two', 'three'
// 如果你要忽略某些值，你可以按照下面的写法获取你想要的值
var [first,,,last] = foo;
console.log(first); // 'one'
console.log(last); // 'four'

// 你也可以这样写
var a, b
[a, b] = [1, 2];
```



## ES7新特性(2016)

ES2016添加了两个小的特性来说明标准化过程
+ 数组includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true,否则返回false
+ a ** b指数运算符，它与Math.pow(a, b)相同


## ES8新特性(2017)
+ async / await
+ Object.values();
+ Object.entries();
+ String padding: padStart()和padEnd(), 填充字符串达到当前长度
+ 函数参数列表结尾允许逗号
+ Object.getOwnPropertyDescriptors();
+ ShareArrayBuffer和Atomice对象，用于从共享内努位置读取和写入

## ES9新特性(2018)
+ 异步地带
+ Promise.finally();
+ Rest/Spread属性
+ 正则表达式命名捕获组
+ 正则表达式反向断言
+ 正则表达式dotAll模式
+ 正则表达式Unicode转意
+ 非专一序列的模板字符串


[原文档](https://www.cnblogs.com/miaSlady/p/10955729.html)