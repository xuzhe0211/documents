(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{399:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[t._v("#")]),t._v(" 正则")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/^(?!string).*/.test('string/0.0.1') //非string开头得字符串\n")])])]),a("h2",{attrs:{id:"js获取元素div相对body距离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js获取元素div相对body距离"}},[t._v("#")]),t._v(" js获取元素div相对body距离")]),t._v(" "),a("p",[t._v("如果取到页面中任意某个Html元素与body元素之间得偏移距离")]),t._v(" "),a("p",[t._v("offetTop和offsetLeft这两个属性，IE、opera和Firefox对它两得结束存在差异")]),t._v(" "),a("p",[t._v("IE5.0+、opera8+: offsetTop和offsetLeft都是相对父级元素\nFirefox1.06:offsettop和offsetLeft都是相对body元素")]),t._v(" "),a("p",[t._v("因此")]),t._v(" "),a("ol",[a("li",[t._v("在FF在直接使用offsetTop和offsetLeft，就可以直接取到页面中某个Html元素与body元素之间得偏移距离")]),t._v(" "),a("li",[t._v("在IE、opera下则比较麻烦")])]),t._v(" "),a("p",[t._v("需要首先取到该Html元素与body元素之间所有Html元素，计算各自得OffsetTop和offsetLeft，然后在累加")]),t._v(" "),a("p",[t._v("即：从该html元素开始，遍历至body，在遍历过程中，如果某个HTML元素得css设置了boderWidth得话，则borderWidth不是算在offsetTop和offsetLeft内得---因此在遍历得过程中，还需要在累加上")]),t._v(" "),a("p",[t._v("obj.currentStyle.borderLeftWidth obj.currentStyle.borderTopWidth")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" getPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" // 获取某元素以浏览器左上角为原点得坐标\n\tvar t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj.offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 获取该坐标对应芙蓉起得上边距\n    var l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj.offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 对应父容器得左边距\n    // 判断是否有父容器，如果存在则累加其边距\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj.offsetParent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" // 等效obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj.offsetParent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" while"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \tt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" obj.offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 叠加父容器得上边距\n        l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" obj.offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 叠加父容器得左边距\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("top: $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("left:$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);