---
autoGroup-7: 设计模式
title: 常用模式
---

## 发布订阅者模式
```
let pubSub = {
	subs: [],
    subscribe(key, fn) {
    	if(!this.subs[key]) {
        	this.subs[key] = [];
        }
        this.subs[key].push(fn);
    },
    publish(...arg){
    	let args = arg;
        let key = args.shift();
        let fns = this.subs[key];
        if (!fns || fns.length <= 0) return;
        for (let i = 0, len = fns.length; i< len; i++) {
        	fns[i](args);
        }
    },
    unSubscribe(key) {
    	delete this.subs[key];
    }
}
//测试
pubSub.subscribe('name', name=> {
	console.log(`your name is ${name}`);
})
pubSub.subscribe('gender', gender => {
	console.log(`your name is ${gender}`);
})
pubSub.publish('name', 'leaf33');
pubSub.publish('gender', '18')

// 简单实现
let obj = {};
const $on = (name, fn) => {
    if (!obj[name]) {
        obj[name] = [];
    }
    obj[name].push(fn);
}
const $emit = (name, val) => {
    if (obj[name]) {
        obj[name].map(fn => {
            fn(val)
        })
    }
}
```

## 单例模式
```
class CreatUser{
	constructor(name) {
        this.name = name;
        this.getName();
    }
    getName() {
    	console.log(this.name)
    }
}
var ProxyMode = (function(){
	var instance = null;
    return function(name) {
    	if(!instance) {
        	instance = new CreatUser(name);
        }
        return instance;
    }
})()
```

## 装饰器模式

[参考地址](/front-end/JavaScript/ts-anotation.html)