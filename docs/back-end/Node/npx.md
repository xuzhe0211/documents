---
title: NPX
---

## 介绍

npx是npm v5.2.0版本引入的工具，其可以快速体验想要尝试的包而不比执行npm init,npm install, 配置scripts等步骤

默认情况下，它会去检查包是否存在(node_modules/.bin及环境变量$PATH),如果存在则执行，不存在则临时安装在运行

```
# 查看指令帮助信息
npx -h
```

+ 作用

1.避免与全局包冲突，可以测试新的版本

2.可直接测试github上的模块

+ 参数

1.--no-install:强制使用本地模块，不存在则报错

2.--ignore-existing:强制使用远程模块


## 执行包

1. global

```
npm i mocha -g
mocha
```

2. node_modules

 ```
 npm i mocha -D
 ./node_modules/.bin/mocha

 ```

3. package

```
npm i mocha -D

# 配置 package.json
{
  scripts: {
  	"test": "mocha"
  }
}

# 执行 scripts
npm run test

```

4. npx

```
npx mocha
```