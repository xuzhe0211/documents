---
autoGroup-8: Tips/方法实现
title: 创建一个对象过程
---

## new 一个对象

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var person = new Person('hellen', 32);
```

## new 对象过程

1. 创建一个空对象

```
var obj = new Object();
```

2. 让Person中的this指向obj,并执行Person的函数体

```
var result = Person.apply(obj, arguments);
```

3. 设置原型链，将obj的__proto__成员指向了Perons函数对象的prototype成员对象

```
obj.__proto = Person.prototype;
```

4. 判断Person的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象

```
if (typeof result === 'object')
    person = result
else 
    person = obj;
```
