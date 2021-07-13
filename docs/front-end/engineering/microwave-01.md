---
autoGroup-1: 微前端
title: 01-qiankun(乾坤)实例
---
[来源地址](https://blog.csdn.net/qq_33396780/article/details/110694871)
## 什么是微前端

微前端就是将不同的功能按照不同的纬度拆分成多个子应用.通过主应用来加载这些子应用。微前端的核心在于拆，拆完之后在和！

## 为什么使用微前端
1. 不同团队间开发同一个应用技术栈不通
2. 希望每个团队都可以独立开发,独立部署
3. 项目中还需要老的应用代码

我们可以将一个应用划分成若干个子应用，将子应用打包成一个个的lib。当路径切换时候加载不同的子应用。这样每个子应用都是独立的，技术栈也不用做限制了！从而解决前端系统开发的问题。

## qiankun框架
[文档地址](https://qiankun.umijs.org/zh)

2018年Single-SPA诞生了，sigle-spa是一个用于前端微服务化的JavaScript前端解决方案(本身没有处理样式隔离，js执行隔离)实现了路由加持和应用加载。

2019年qiankun基于Single-SPA,提供了更加开箱即的API(single-spa+sandbox+import-html-entry)做到了，技术栈无关、并且接入简单(像iframe一样简单)。

## qiankun框架实例

**这里我们打算建立三个项目进行实操，一个Vue项目充当主应用，另一个Vue和React应用子应用**

### 创建三个应用

1. 创建基座
```
vue create qiankun-base
```

2. 创建子应用1
```
vue create qiankun-vue
```

3. 创建子应用2
```
cnpm install -g create-react-app
create-react-app qiankun-react
```
- 三个项目

    基座:qiankun-base子应用:qiankun-vue, qiankun-react

### 项目配置(主要)

1. 基座qiankun-base配置
:::tip
项目创建好后我们首先进行主应用qiankun-base的配置，进入man.js文件进行配置，在main.js中加入一下代码，要注意的是，entry这项配置是我们
:::


