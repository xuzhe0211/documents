(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{395:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"强制使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制使用"}},[t._v("#")]),t._v(" 强制使用")]),t._v(" "),a("p",[t._v("改脚本来源"),a("a",{attrs:{href:"https://github.com/vuejs/vue-next/blob/master/scripts/checkYarn.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if (!/yarn\\.js$/.test(process.env.npm_execpath || '')) {\n  console.warn(\n    '\\u001b[33mThis repository requires Yarn 1.x for scripts to work properly.\\u001b[39m\\n'\n  )\n  process.exit(1)\n}\n")])])]),a("p",[t._v("配合package.json的preinstall声明周期：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "scripts": {\n        "preinstall": "node ./scripts/checkYarn.js"\n    }\n}\n')])])]),a("p",[t._v("这样就大功告成了。")]),t._v(" "),a("h2",{attrs:{id:"link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),a("p",[t._v("yarn link 并不像npm link一样可以全局使用，需要安装到指定文件夹才可使用，当然也是有一定方法的")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "scripts": {\n        "link:add": "yarn global add file:${pwd}"\n    }\n}\n')])])]),a("p",[t._v("执行yarn link:add即可")])])}),[],!1,null,null,null);s.default=n.exports}}]);