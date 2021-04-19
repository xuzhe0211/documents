(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{394:function(n,a,e){"use strict";e.r(a);var s=e(42),t=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"node-pm2使用文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-pm2使用文档"}},[n._v("#")]),n._v(" Node pm2使用文档")]),n._v(" "),e("p",[e("strong",[n._v("pm2和forever")]),n._v("是启动Nodejs服务常用到的两个工具。使用这两个指令可以使node服务在后台运行，另外他们可以在服务因异常或其他原因被杀掉后进行自动重启。")]),n._v(" "),e("h3",{attrs:{id:"基本指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本指令"}},[n._v("#")]),n._v(" 基本指令")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install pm2 -g //全局安装\n\npm2 start app.js 启动服务，入口文件是app.js\n\npm2 start app.js --name [name] 重命名进程、应用\n\npm2 start app.js -i [n] --name [name] 启动n个进程，名字命名为name\n\npm2 restart [name or id] 重启服务\n\npm2 start app.js --max_memory_restart 1024M 当内存超过1024M时自动重启。\n\n\npm2 stop [name or id] 结束进程\n\npm2 delete [name or id] 删除进程\n\npm2 delete all 删除所有进程/应用\n\npm2 stop all 结束所有进程\n\npm2 list 列出所有进程/应用\n\npm2 monit 对服务进行监控-查看进程/应用的资源消耗情况\n\npm2 describe [name or id] 查看某个进程/应用具体情况\n\n")])])]),e("h3",{attrs:{id:"高级用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[n._v("#")]),n._v(" 高级用法")]),n._v(" "),e("p",[n._v("pm2配置文件启动")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('pm2 ecosystem 生成配置文件ecosystem.json\n\npm2 start Or Restart /file/path/ecosystem.json 通过配置文件启动服务\n\n//ecosystem.json内容\n\n  {\n    /**\n    * Application configuration section\n    * http://pm2.keymetrics.io/docs/usage/application-declaration/\n    * 多个服务，依次放到apps对应的数组里\n    */\n    apps : [\n    // First application\n        {\n            name      : "nova",\n            max_memory_restart: "300M",\n            script    : "/root/nova/app.js",\n            out_file : "/logs/nova_out.log",\n            error_file : "/logs/nova_error.log",\n            instances  : 4,\n            exec_mode  : "cluster",\n            env: {\n                NODE_ENV: "production"\n            }\n        }\n    ]\n }\n')])])]),e("h2",{attrs:{id:"nrm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[n._v("#")]),n._v(" NRM")]),n._v(" "),e("h3",{attrs:{id:"什么是nrm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是nrm"}},[n._v("#")]),n._v(" 什么是nrm")]),n._v(" "),e("p",[n._v("nrm是一个npm源管理器，允许你快速的在npm源间切换。")]),n._v(" "),e("p",[n._v("npm默认情况下是使用npm官方源(使用npm config ls命令查看)，这个源不稳定，一般我们使用淘宝源：https://registry.npm.taobao.org/，修改源的方式也很简单")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm set registry https://registry.npm.taobao.org/\n")])])]),e("p",[n._v("之后切换官方源，是不是比较麻烦？？所以有了nrm")]),n._v(" "),e("h4",{attrs:{id:"nrm使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nrm使用"}},[n._v("#")]),n._v(" nrm使用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//nrm安装\nnpm install -g nrm\n\n//查看可选源\nnrm ls\n\n//查看当前使用源\nnrm current\n\n//切换源\n/**\nregistry为源名，例如：nrm use taobao\n**/\nnrm use <registry>\n\n//添加源\nnrm add <registry> <url>\n//例如：\nnrm add cpm http://192.168.21.11:8888/repository\n\n\n//删除源\nnrm del <registry>\n\n//测试源速度(响应时间)\nnrm test <registry>\n\n")])])]),e("h2",{attrs:{id:"nrm-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nrm-2"}},[n._v("#")]),n._v(" NRM")]),n._v(" "),e("h3",{attrs:{id:"nvm是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nvm是什么"}},[n._v("#")]),n._v(" nvm是什么")]),n._v(" "),e("p",[n._v("nvm全名node.js version management,顾名思义是一个nodejs的版本管理工具。通过它可以安装和切换不同的nodejs版本。")]),n._v(" "),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[n._v("#")]),n._v(" 使用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install nrm \n或者\ncurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash\n\n//查看本地安装的所有版本 可选参数available 显示所有可下载的版本\nnvm list [available]\n\n//安装\nnvm install 11.13.0\n\n//使用特定版本\nnvm use 11.13.0\n\n//卸载\nnvm uninstall 11.13.0\n")])])]),e("h2",{attrs:{id:"nodemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodemon"}},[n._v("#")]),n._v(" nodemon")]),n._v(" "),e("p",[n._v("nodemon是一种工具，可以自动检测到目录中的文件更改时通过重新启动应用程序来调试基于node.js的应用程序。")]),n._v(" "),e("p",[n._v("安装")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install -g nodemon\n//或\nnpm install --save-dev nodemon\n")])])]),e("p",[n._v("使用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('nodemon   ./main.js // 启动node服务\nnodemon ./main.js localhost 6677 // 在本地6677端口启动node服务\n"start": "ts-node -r tsconfig-paths/register nodemon src/main.ts",\n')])])]),e("p",[n._v("延迟重启")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("nodemon -delay10 main.js\n\nnodemon --delay 2.5 server.js\n\nnodemon --delay 2500ms server.js\n")])])]),e("p",[n._v("这个就类似于js函数中的函数节流,只在最后一次更改的文件往后延迟重启.避免了短时间多次重启的局面.")]),n._v(" "),e("p",[n._v("nodemon支持本地和全局配置文件。这些通常是命名的nodemon.json，可以位于当前工作目录或主目录中。可以使用该--config (file)选项指定备用本地配置文件。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('\n{\n  "verbose": true,\n  "ignore": ["*.test.js", "fixtures/*"],\n  "execMap": {\n    "rb": "ruby",\n    "pde": "processing --sketch={{pwd}} --run"\n  }\n}\n')])])]),e("h2",{attrs:{id:"yzb-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yzb-cli"}},[n._v("#")]),n._v(" yzb-cli")]),n._v(" "),e("blockquote",[e("p",[n._v("开发node cli工具参考，感觉写的不错哦")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/yzb-cli",target:"_blank",rel:"noopener noreferrer"}},[n._v("参考地址"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"cli-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-table"}},[n._v("#")]),n._v(" cli-table")]),n._v(" "),e("blockquote",[e("p",[n._v("在cli中打印表格")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/cli-table",target:"_blank",rel:"noopener noreferrer"}},[n._v("参考地址"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"一、linux下chmod-x的意思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、linux下chmod-x的意思"}},[n._v("#")]),n._v(" 一、linux下chmod +x的意思")]),n._v(" "),e("p",[e("span",{staticStyle:{color:"red"}},[n._v("chmod +x的意思就是给文件执行权限")])]),n._v(" "),e("p",[n._v("LINUX下不同的文件类型有不同的颜色，")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("绿色文件： 可执行文件，可执行的程序")])]),n._v(" "),e("li",[e("p",[n._v("红色文件：压缩文件或者包文件")])]),n._v(" "),e("li",[e("p",[n._v("蓝色文件：目录")])]),n._v(" "),e("li",[e("p",[n._v("白色文件：一般性文件，如文本文件，配置文件，源码文件等")])]),n._v(" "),e("li",[e("p",[n._v("浅蓝色文件：链接文件，主要是使用ln命令建立的文件")])]),n._v(" "),e("li",[e("p",[n._v("红色闪烁：表示链接的文件有问题")])]),n._v(" "),e("li",[e("p",[n._v("黄色：表示设备文件")])]),n._v(" "),e("li",[e("p",[n._v("灰色：表示其他文件")])])]),n._v(" "),e("p",[e("a",{attrs:{href:"!https://blog.csdn.net/xudailong_blog/article/details/82891506"}},[n._v("相关问题")])]),n._v(" "),e("h2",{attrs:{id:"二、postman"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、postman"}},[n._v("#")]),n._v(" 二、postman")]),n._v(" "),e("p",[n._v("接口调试工具")]),n._v(" "),e("h2",{attrs:{id:"三、node-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、node-模块"}},[n._v("#")]),n._v(" 三、node 模块")]),n._v(" "),e("h3",{attrs:{id:"ora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ora"}},[n._v("#")]),n._v(" ora")]),n._v(" "),e("p",[n._v("node命令行环境的loading、显示各种状态的图标等")]),n._v(" "),e("h3",{attrs:{id:"commander"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[n._v("#")]),n._v(" commander")]),n._v(" "),e("p",[n._v("命令行界面的完整解决方案，受Ruby Commander启发")]),n._v(" "),e("p",[e("strong",[n._v("安装")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install commander --save\n")])])]),e("p",[n._v("** Options解析**")]),n._v(" "),e("p",[n._v("使用.option()方法定义commander的选项options，也可以作为选项的文档。下面的示例讲解析来自process.argv的args和options，然后将剩下的参数(未定义的参数)赋值给commander对象的args属性(program.args)，program.args是一个数组。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("#!/usr/bin/env node\nvar program = require('commander');\n\nprogram\n\t.version('0.1.0')\n    .options('-p,--peppers', 'Add peppers')\n    .options('-P, --pineapple', 'Add pineapple')\n    .options('-b, --bbq-sauce', 'Add bbq sauce')\n    .options('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')\n    .parse(process.argv);\n    \nconsole.log('you ordered a pizza with:');\nif(program.peppers) console.log('  --peppers');\nif (program.pineapple) console.log('  - pineapple');\nif (program.bbqSauce) console.log('  - bbq');\nconsole.log('  - %s cheese', program.cheese);\n// 执行\nnode index.js -pPbc hahah<br>\nyou ordered a pizza with:\n  - peppers\n  - pineapple\n  - bbq\n  - hahah cheese\n")])])]),e("p",[n._v("栗子：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("#!/usr/bin/env node\n\nconst program = require('commander')\nprogram.version(require('../package').version)\nprogram\n    .command('init <name>')\n    .description('init project')\n    .action(\n        require('../lib/init')\n    )\nprogram.parse(process.argv)\n\n")])])]),e("h2",{attrs:{id:"数据库工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库工具"}},[n._v("#")]),n._v(" 数据库工具")]),n._v(" "),e("p",[n._v("adminer--- Adminer是一个类似于phpMyAdmin的MySQL管理客户端\nmongo express---基于Web的MongoDB管理界面")]),n._v(" "),e("p",[n._v("docker 预习视频\nsequel pro 数据库工具")]),n._v(" "),e("p",[n._v("自己本地mysql数据库 密码xuzhe153289653")])])}),[],!1,null,null,null);a.default=t.exports}}]);