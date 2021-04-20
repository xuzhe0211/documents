(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{386:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/magicg/p/13131383.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文地址"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" set")]),e._v(" "),t("ol",[t("li",[e._v("成员不能重复")]),e._v(" "),t("li",[e._v("只有键值，没有键名，有点类似数组")]),e._v(" "),t("li",[e._v("可以遍历，方法有add，delete, has")])]),e._v(" "),t("h3",{attrs:{id:"weakset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakset"}},[e._v("#")]),e._v(" weakSet")]),e._v(" "),t("ol",[t("li",[e._v("成员都是对象")]),e._v(" "),t("li",[e._v("成员都是弱引用，随时可以消失。可以用来保存DOM节点，不容易造成内存泄漏")]),e._v(" "),t("li",[e._v("不能遍历，方法有add,delete, has")])]),e._v(" "),t("h3",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[e._v("#")]),e._v(" Map")]),e._v(" "),t("ol",[t("li",[e._v("本质上是键值对的集合，类似集合。")]),e._v(" "),t("li",[e._v("可以遍历，方法有很多，可以跟各种数据转换")])]),e._v(" "),t("h3",{attrs:{id:"weakmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakmap"}},[e._v("#")]),e._v(" weakMap")]),e._v(" "),t("ol",[t("li",[e._v("直接受对象作为建名(null除外)，不接受其他类型的值作为键名")]),e._v(" "),t("li",[e._v("键名所指向的对象，不计入垃圾回收机制")]),e._v(" "),t("li",[e._v("不能遍历，方法get,set,has, delete")])]),e._v(" "),t("p",[e._v("Set和Map主要的应用场景在于数据重组和数据储存")]),e._v(" "),t("p",[e._v("Set是一种叫做集合的数据类型，Map是一种叫做字典的数据类型。")]),e._v(" "),t("h2",{attrs:{id:"集合-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集合-set"}},[e._v("#")]),e._v(" 集合(Set)")]),e._v(" "),t("p",[e._v("ES6新增的一种新的数据类型，类似数组，但是成员的唯一且无序的，没有与重复的值。")]),e._v(" "),t("p",[e._v("Set本身是构造函数，用来生成Set数据类型")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("new Set();\n//举个栗子\nconst s = new Set();\n[1,2,3,4,3,2,1].forEach(x=> s.add(x));\n\nfor(let i of s) {\n\tconsole.log(i);\n}\n//去重数组的重复对象\nlet arr = [1,2,3,2,1];\n[...new Set(arr)];\n")])])]),t("p",[e._v("Set对象允许你储存任何类型的唯一值，无论是原始值或是对象的引用")]),e._v(" "),t("p",[e._v("向Set加入值的时候，不会发生类型转换，所以5和'5'是不同的值。")]),e._v(" "),t("p",[e._v("Set内部判断两个值是否不同，使用的算法叫做'Same-value-zero equuality'，它类似精确相等运算符(===)，主要区别是NaN等于自身，而精确相等运算法认为NaN不等于自身")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set = new Set();\nlet a = NaN;\nlet b = NaN;\nset.add(a);\nset.add(b);\nconsole.log(set)//Set(NaN)\n\nlet set1 = new Set();\nset1.add(5);\nset1.add('5');\nconsole.log([...set1])//[5, '5']\n")])])]),t("p",[e._v("Set实例属性")]),e._v(" "),t("ul",[t("li",[e._v("construcotor属性")]),e._v(" "),t("li",[e._v("size元素数量")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set = new Set([1,2,3,2,1]);\nconsole.log(set.length) //undefined\nconsole.log(set.size);//3\n")])])]),t("p",[e._v("Set实例方法")]),e._v(" "),t("ul",[t("li",[e._v("add(value):新增，相当于array里的push")]),e._v(" "),t("li",[e._v("delete(value):存在即删除集合中value")]),e._v(" "),t("li",[e._v("has(value):判断集合中是否存在value")]),e._v(" "),t("li",[e._v("clear():清空集合")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set = new Set();\nset.add(1).add(2).add(1);\nset.has(1);//true\nset.has(3);//false\nset.delete(1);/\nset.has(1);//false;\n")])])]),t("p",[e._v("Array.from方法可以将Set结构转成数组")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const items = new Set([1,2,3,2]);\nconst array = Array.from(items);\nconsole.log(array);\n//或\nconst arr = [...item];\nconsole.log(arr);\n")])])]),t("p",[e._v("遍历方法")]),e._v(" "),t("ul",[t("li",[e._v("keys()：返回一个包含集合中所有键的迭代器")]),e._v(" "),t("li",[e._v("values(): 返回一个包含集合中所有值的迭代器")]),e._v(" "),t("li",[e._v("entries():返回一个包含Set对象中所有元素的键值对的迭代器")]),e._v(" "),t("li",[e._v("forEach(callbackFn, thisArg):用于对集合成员执行callbackFn操作，如果提供了thisArg参数，回调中的this会是这个参数，没有返回值")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set = new Set([1,2,3]);\nconsole.log(set.keys())\nconsole.log(set.values())\nconsole.log(set.enntries())\n\nfor (let item of set.keys()) {\n\tconsole.log(item)\n}// 1 2 3\n")])])]),t("p",[e._v("Set可默认遍历，默认迭代器生成函数是values()方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Set.prototype[Symbol.intertor] === Set.prototype.values // true\n")])])]),t("p",[e._v("所以，Set可以使用map,filter方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set = new Set([1,2,3]);\nset = new Set([...set]).map(item => item * 2);\nconsole.log([...set]) //[2,4,6]\n\nset = new Set([...set]).filter(item => item >= 4);\nconsole.log([...set])\n")])])]),t("p",[e._v("因此，Set很容易实现交集、并集、差集")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set1 = new Set([1,2,3]);\nlet set2 = new Set([4,3,2]);\n\nlet intersect = new Set([...set1]).filter(value => set2.has(value));\nlet union = new Set([...set1, ...set2]);\nlet difference = new Set([...set1]).filter(value => !set2.has(value));\n")])])]),t("h2",{attrs:{id:"weakset-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakset-2"}},[e._v("#")]),e._v(" WeakSet")]),e._v(" "),t("p",[e._v("WeakSet对象允许你将弱引用对象储存在一个集合中。")]),e._v(" "),t("p",[e._v("WeakSet与Set的区别：")]),e._v(" "),t("ul",[t("li",[e._v("WeakSet只能储存对象引用，不能存放值，而Set对象可以")]),e._v(" "),t("li",[e._v("WeakSet对象中储存的对象都是被弱引用的，即垃圾回收机制不考虑WeakSet对该对象的应用，如果没有其他变量或属性引用这个对象值，则这个对象将会被垃圾回收掉(不考虑对象还存在于WeakSet中)，所以，WeakSet对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了(被垃圾回收了),WeakSet对象是无法被遍历的(ES6规定WeakSet不可遍历)，也没有办法拿到它包含的所有元素")])]),e._v(" "),t("p",[e._v("属性")]),e._v(" "),t("ul",[t("li",[e._v("constructor:构造函数，任何一个具有Iterable接口的对象，都可以作为参数")]),e._v(" "),t("li",[e._v("add(value):在WeakSet对象中添加一个元素value")]),e._v(" "),t("li",[e._v("has(value):判断WeakSet对象中是否包含value")]),e._v(" "),t("li",[e._v("delete(value):删除元素value")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var ws = new WeakSet();\nvar obj = {};\nvar foo = {};\n\nws.add(window);\nws.add(obj);\n\nws.has(window);//true\nws.has(foo);//false\n\nws.delete(window);// true\nws.has(window); //false\n")])])]),t("h2",{attrs:{id:"字典-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字典-map"}},[e._v("#")]),e._v(" 字典(map)")]),e._v(" "),t("p",[e._v("集合与字典的区别：")]),e._v(" "),t("ul",[t("li",[e._v("共同点:集合、字典可以储存不重复的值")]),e._v(" "),t("li",[e._v("不同点:集合是以[value, value]的形式储存元素，字典是以[key, value]的形式存储")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const m = new Map();\nconst o = {p: 'haha'};\nm.set(o, 'content');\nm.get(o);//content\n\nm.has(o);//true\nm.delete(o);//true\nm.has(o); //false\n")])])]),t("p",[e._v("任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以作为Map构造函数的参数，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const set = new Set({\n\t['foo', 1],\n    ['bar', 2]\n})\nconst m1 = new Map(set);\nm1.get('foo');//1\n\nconst m2 = new Map([['baz', 3]]);\nconst m3 = new Map(m2);\nm3.get('baz');//3\n//如果读取一个位置的键，则返回undefined\nnew Map().get('fdasfasg')\n")])])]),t("p",[t("strong",[e._v("注意，只有对同一个对象的引用，Map结构才将其视为同一个键，这一点非常小心")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const map = new Map();\nmap.set(['a'], 555);\nmap.get(['a']);//undefined\n")])])]),t("p",[e._v("上面代码的set和get方法，表面上是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined")]),e._v(" "),t("p",[e._v("Map的键实际上是跟内存地址绑定，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞(clash)的问题，我们扩展别人库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名")]),e._v(" "),t("p",[e._v("如果Map的键是一个简单类型的值(数字、字符串、布尔值)，则只要两个值严格相等，Map将其视为一个建，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但是Map将其视为同一键")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let map = new Map();\nmap.set(-0, 123);\nmap.get(+0);//123\n\nmap.set(true,1);\nmap.set('true', 2);\nmap.get(true);//1\n\nmap.set(undefined, 3);\nmap.set(null, 4);\nmap.get(undefined);//3\n\nmap.set(NaN,123);\nmap.get(NaN);//123\n\n")])])]),t("p",[t("strong",[e._v("属性")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("constructor:构造函数")])]),e._v(" "),t("li",[t("p",[e._v("size:返回字典中所包含的元素个数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const map = new Map([\n    ['name', 'An'],\n    ['des', 'JS']\n])\nmap.size //2\n")])])])])]),e._v(" "),t("p",[e._v("```")]),e._v(" "),t("p",[t("strong",[e._v("操作方法")])]),e._v(" "),t("ul",[t("li",[e._v("set(key, value):想字典中添加新元素")]),e._v(" "),t("li",[e._v("get(key):通过键查找特定的数值并返回")]),e._v(" "),t("li",[e._v("has(key): 判断字典中是否存在键Key")]),e._v(" "),t("li",[e._v("delete(key):通过键key从字典中移除对应的数据")]),e._v(" "),t("li",[e._v("clear():将这个字典中所有元素删除")])]),e._v(" "),t("p",[t("strong",[e._v("遍历方法")])]),e._v(" "),t("ul",[t("li",[e._v("Keys():将字典中包含的所有键名以迭代器形式返回")]),e._v(" "),t("li",[e._v("values():将字典中包含的所有数值以迭代器形式返回")]),e._v(" "),t("li",[e._v("entries():返回所有成员的迭代器")]),e._v(" "),t("li",[e._v("forEach():遍历字典所有成员")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const map = new Map([\n\t['name', 'An'],\n    ['des', 'JS']\n])\nconsole.log(map.entries())    // [Map Entries] { [ 'name', 'An' ], [ 'des', 'JS' ] }\nconsole.log(map.keys()) // [Map Iterator] { 'name', 'des' }\n")])])]),t("p",[e._v("Map结构的默认遍历器接口(Symbol.interator属性)，就是entries方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("map[Symbol.iterator] === map.entries;//true\n")])])]),t("p",[e._v("Map结构转为数组结构，比较快速的方法就是使用扩展运算符(...)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const reporter = {\n\treport: function(key, value) {\n    \tconsole.log('Key: %s, Value: %s', key, value);\n    }\n}\nlet map = new Map([\n\t['name', 'An'], \n    ['des', 'JS']\n])\nmap.forEach(function(value, key, map){\n\tthis.report(key, value)\n}, reporter);\n//这里，forEach方法的回调函数的this,就是指向reporter\n")])])]),t("p",[t("strong",[e._v("与其他数据结构的相互转换")])]),e._v(" "),t("ol",[t("li",[e._v("Map转Array")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const map = new Map([[1,1], [2,2]， [3,3]]);\nconsole.log([...map])\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Array转map")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const map = new Map([[1,1], [2,2], [3,4]]);\nconsole.log(map)\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Map转Object")])]),e._v(" "),t("p",[e._v("因为Object的键名都为字符串，而Map的键名为对象，所以转换的时候会把非字符串键名转换为字符串键名")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function mapToObj(map) {\n\tvar obj = Object.create(null);\n    for (let [key, value] of map) {\n    \tobj[key] = value;\n    }\n    return obj;\n}\nconst map = new Map().set('name', 'An').set('des','Js');\nmapToObj(map)\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Object 转 Map")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("functon objToMap(obj) {\n\tlet map = new Map();\n    for (let key of Object.keys(obj)) {\n    \tmap.set(key, obj[key]);\n    }\n    return map\n}\nobjToMap({'name': 'An', 'des': 'Js'})\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Map转JSON")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function mapToJson(map) {\n\treturn JSON.stringify([...map])\n}\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("JSON转Map")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function jsonToStrMap(jsonStr) {\n\treturn objToMap(JSON.parse(jsonStr))\n}\n")])])]),t("h2",{attrs:{id:"weakmap-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakmap-2"}},[e._v("#")]),e._v(" WeakMap")]),e._v(" "),t("p",[e._v("WeakMap对象是一组键值对的集合，其中的键是弱引用对象，而值是可以任意。")]),e._v(" "),t("p",[e._v("注意，WeakMap弱引用的只是键名，而不是键值。键值依然是正常引用。")]),e._v(" "),t("p",[e._v("WeakMap中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将被垃圾回收(相应key则变成无效),所以WeakMap是不可枚举的")]),e._v(" "),t("p",[t("strong",[e._v("属性")])]),e._v(" "),t("ul",[t("li",[e._v("construcor:构造函数")])]),e._v(" "),t("p",[t("strong",[e._v("方法")])]),e._v(" "),t("ul",[t("li",[e._v("has(key):判断是否有key关联对象")]),e._v(" "),t("li",[e._v("get(key):返回key关联对象(没有则返回undefined)")]),e._v(" "),t("li",[e._v("set(key):设置一组key关联对象")]),e._v(" "),t("li",[e._v("delete(key)：删除key的关联对象")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let myElement = document.getElementById('logo');\nlet myWeakmap = new WeakMap();\n\nmyWeakmap.set(myElement, { timesClicked, 0});\n\nmyElement.addEventListener('click', function() {\n\tlet logoData = myWeakmap.get(myElement);\n    logoData.timesClicked++;\n}, false)\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);