---
title: Object.defineProperty vs proxy
---

## 对比

### Proxy优势
+ Proxy可以直接监听整个对象而非属性
+ Proxy可以直接监听数组变化.
+ Proxy有13中拦截方法，如ownKeys、deleteProperty, has等是Object.defineProperty不具备的
+ Proxy返回的是一个新对象,我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象属性直接修改;
+ Proxy作为新标准将收到浏览器厂商重点储蓄的性能优化，也就是传说中的新标准的性能红利

### Object.defineProperty的优势如下

+ 兼容性好，支持IE9，而Proxy存在浏览器兼容性问题，而且无法用polyfill磨平

### Object.defineProperty不足在于

+ Object.defineProperty 只能劫持对象的属性，因此我们需要对每个对象的每个属性进行遍历
+ Object.defineProperty 不能监听数组。是通过重写数据的那7个可以改变数据的方法对数组进行监听的
+ Object.defineProperty也不能对ES6新产生的Map,Set这些数组解构做出监听。
+ Object.defineProperty也不能监听新增和删除操作，通过Vue.set()和Vue.delete来实现响应式的。

