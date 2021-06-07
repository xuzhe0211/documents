(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{396:function(e,t,n){"use strict";n.r(t);var a=n(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/path.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("path"),n("OutboundLink")],1),e._v(" (opens new window)是 node 提供的处理文件和目录路径的工具。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const path = require("path");\n')])])]),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const path = require("path");\nconst pick = require("lodash.pick");\n\nconst paths = {\n  dir: "dir1/dir2/dir3",\n  abDir: "/dir1/dir2/dir3",\n  abDirSlash: "/dir1/dir2/dir3/",\n  file: "dir1/dir2/dir3/file.js",\n  oFile: "file.js",\n  mExtFile: "dir1/dir2/dir3/file.spec.js",\n  abFile: "/dir1/dir2/dir3/file.js",\n};\n\nconst segPath = {\n  nPath: ["aaa", "bbb", "ccc"],\n  abSPath: ["/aaa", "bbb", "ccc"],\n  abIPath: ["aaa", "/bbb", "ccc"],\n  bPath: ["aaa", "/bbb", "..", "ccc"],\n  b2Path: ["aaa", "../..", "ccc"],\n  mPath:  ["foo", "/nnn/", "foo//", "bar/baz", "..", "aaa"],\n};\n\n// basename 返回 path 的最后一部分\ndescribe("basename should return the last portion of a path", () => {\n  test("dir should return dir3", () => {\n    const p = paths.dir;\n\n    expect(path.basename(p)).toBe("dir3");\n  });\n  \n  test("abDir should return dir3", () => {\n    const p = paths.abDir;\n\n    expect(path.basename(p)).toBe("dir3");\n  });\n\n  test("abDirSlash should return dir3", () => {\n    const p = paths.abDirSlash;\n\n    expect(path.basename(p)).toBe("dir3");\n  });\n\n  test("file should return file.js", () => {\n    const p = paths.file;\n\n    expect(path.basename(p)).toBe("file.js");\n  });\n\n  test("oFile should return file.js", () => {\n    const p = paths.oFile;\n\n    expect(path.basename(p)).toBe("file.js");\n  });\n\n  test("mExtFile should return file.spec.js", () => {\n    const p = paths.mExtFile;\n\n    expect(path.basename(p)).toBe("file.spec.js");\n  });\n\n  test("abFile should return file.js", () => {\n    const p = paths.abFile;\n\n    expect(path.basename(p)).toBe("file.js");\n  });\n\n  test("(unmatch ext param)file should return file.js", () => {\n    const p = paths.file;\n\n    expect(path.basename(p, ".html")).toBe("file.js");\n  });\n\n  test("(match ext param)file should return file", () => {\n    const p = paths.file;\n\n    expect(path.basename(p, ".js")).toBe("file");\n  });\n\n  test("(unmatch ext param)abFile should return file.js", () => {\n    const p = paths.abFile;\n\n    expect(path.basename(p, ".html")).toBe("file.js");\n  });\n\n  test("(match ext param)abFile should return file", () => {\n    const p = paths.abFile;\n\n    expect(path.basename(p, ".js")).toBe("file");\n  });\n});\n\n// delimiter 返回平台特定的路径界定符\ndescribe("delimiter should return the platform-specific path delimiter", () => {\n  const paths = {\n    ":": "/usr/bin:/bin",\n    ";": "C:\\Windows\\system32;C:\\Windows"\n  }\n\n  test("should return correct array", () => {\n    const p = paths[path.delimiter]\n\n    if (path.delimiter === ":") {\n      expect(p.split(path.delimiter)).toStrictEqual(["/usr/bin", "/bin"]);\n    }\n    if (path.delimiter === ";") {\n      expect(p.split(path.delimiter)).toStrictEqual(["C:\\\\Windows\\\\system32", "C:\\\\Windows"]);\n    }\n  });\n});\n\n// dirname 返回目录名\ndescribe("dirname should return the directory of a path", () => {\n  test("dir should return dir1/dir2", () => {\n    const p = paths.dir;\n\n    expect(path.dirname(p)).toBe("dir1/dir2");\n  });\n\n  test("abDir should return /dir1/dir2", () => {\n    const p = paths.abDir;\n\n    expect(path.dirname(p)).toBe("/dir1/dir2");\n  });\n\n  test("abDirSlash should return /dir1/dir2", () => {\n    const p = paths.abDirSlash;\n\n    expect(path.dirname(p)).toBe("/dir1/dir2");\n  });\n\n  test("file should return dir1/dir2/dir3", () => {\n    const p = paths.file;\n\n    expect(path.dirname(p)).toBe("dir1/dir2/dir3");\n  });\n\n  test("oFile should return .", () => {\n    const p = paths.oFile;\n\n    expect(path.dirname(p)).toBe(".");\n  });\n\n  test("mExtFile should return dir1/dir2/dir3", () => {\n    const p = paths.mExtFile;\n\n    expect(path.dirname(p)).toBe("dir1/dir2/dir3");\n  });\n\n  test("abFile should return /dir1/dir2/dir3", () => {\n    const p = paths.abFile;\n\n    expect(path.dirname(p)).toBe("/dir1/dir2/dir3");\n  });\n});\n\n// extname 返回扩展名\ndescribe("extname should return the extension of a path", () => {\n  const extPaths = {\n    ...paths,\n    oMExtFile: "index.coffee.md",\n    unExtFile: "index.",\n    oFileName: "index",\n    oExt: ".index",\n    oMExt: ".index.md"\n  }\n\n  test("dir should return empty string", () => {\n    const p = extPaths.dir;\n\n    expect(path.extname(p)).toBe("");\n  });\n\n  test("abDir should return empty string", () => {\n    const p = extPaths.abDir;\n\n    expect(path.extname(p)).toBe("");\n  });\n\n  test("abDirSlash should return empty string", () => {\n    const p = extPaths.abDirSlash;\n\n    expect(path.extname(p)).toBe("");\n  });\n\n  test("file should return .js", () => {\n    const p = extPaths.file;\n\n    expect(path.extname(p)).toBe(".js");\n  });\n\n  test("oFile should return .js", () => {\n    const p = extPaths.oFile;\n\n    expect(path.extname(p)).toBe(".js");\n  });\n\n  test("mExtFile should return .js", () => {\n    const p = extPaths.mExtFile;\n\n    expect(path.extname(p)).toBe(".js");\n  });\n\n  test("abFile should return .js", () => {\n    const p = extPaths.abFile;\n\n    expect(path.extname(p)).toBe(".js");\n  });\n\n  test("oMExtFile should return .md", () => {\n    const p = extPaths.oMExtFile;\n\n    expect(path.extname(p)).toBe(".md");\n  });\n\n  test("unExtFile should return .", () => {\n    const p = extPaths.unExtFile;\n\n    expect(path.extname(p)).toBe(".");\n  });\n\n  test("oFileName should return empty string", () => {\n    const p = extPaths.oFileName;\n\n    expect(path.extname(p)).toBe("");\n  });\n\n  test("oExt should return empty string", () => {\n    const p = extPaths.oExt;\n\n    expect(path.extname(p)).toBe("");\n  });\n\n  test("oMExt should return .md", () => {\n    const p = extPaths.oMExt;\n\n    expect(path.extname(p)).toBe(".md");\n  });\n});\n\n// parse 根据 path 返回一个对象\ndescribe("parse should parse path and return an object", () => {\n  test("parse a normal path string", () => {\n    expect(path.parse("/foo/bar/baz.spec.js")).toEqual({\n      root: "/",\n      dir: "/foo/bar",\n      base: "baz.spec.js",\n      name: "baz.spec",\n      ext: ".js"\n    });\n  });\n});\n\n// format 根据对象返回路径\ndescribe("format should return a path from an object", () => {\n  const oPaths = {\n    root: "/root",\n    dir: "/home/shanyuhai/Test/node",\n    base: "path.spec.js",\n    name: "path.spec",\n    ext: ".js"\n  };\n\n  test("root & base(root do not have platform separator)", () => {\n    expect(path.format(pick(oPaths, ["root", "base"]))).toBe("/rootpath.spec.js")\n  });\n\n  test("root & name & ext(ext should have .)", () => {\n    expect(path.format(pick(oPaths, ["root", "name", "ext"]))).toBe("/rootpath.spec.js")\n  });\n\n  test("root will be ignored if dir is provided", () => {\n    expect(path.format(pick(oPaths, ["root", "dir", "base"]))).toBe("/home/shanyuhai/Test/node/path.spec.js")\n  });\n\n  test("name & ext will be ignored if base is provided", () => {\n    expect(path.format(pick(oPaths, ["root", "dir", "base", "ext"]))).toBe("/home/shanyuhai/Test/node/path.spec.js")\n  });\n});\n\n// isAbsolute 检测 path 是否为绝对路径\ndescribe("isAbsolute determines if path is an absolute path", () => {\n  test("dir should return false", () => {\n    const p = paths.dir;\n\n    expect(path.isAbsolute(p)).toBeFalsy();\n  });\n\n  test("abDir should return true", () => {\n    const p = paths.abDir;\n\n    expect(path.isAbsolute(p)).toBeTruthy();\n  });\n\n  test("file should return false", () => {\n    const p = paths.file;\n\n    expect(path.isAbsolute(p)).toBeFalsy();\n  });\n\n  test("abFile should return true", () => {\n    const p = paths.abFile;\n\n    expect(path.isAbsolute(p)).toBeTruthy();\n  });\n});\n\n// join 会将给定的路径片段利用界定符链接\ndescribe("join will link the given path segment with the delimiter", () => {\n  test("normal path segment will link with the delimiter", () => {\n    expect(path.join(...segPath.nPath)).toBe("aaa/bbb/ccc");\n  });\n\n  test("absolute normal path segment will link with the delimiter", () => {\n    expect(path.join(...segPath.abSPath)).toBe("/aaa/bbb/ccc");\n  });\n\n  test("absolute path segment in args do not effect", () => {\n    expect(path.join(...segPath.abIPath)).toBe("aaa/bbb/ccc");\n  });\n\n  test(".. will back to the upper path level", () => {\n    expect(path.join(...segPath.bPath)).toBe("aaa/ccc");\n  });\n\n  test("../.. will back to the upper two path level", () => {\n    expect(path.join(...segPath.b2Path)).toBe("../ccc");\n  });\n\n  test("multiple formats mixed", () => {\n    expect(path.join(...segPath.mPath)).toBe("foo/nnn/foo/bar/aaa");\n  });\n});\n\n// resolve 解析路径或片段为绝对路径\ndescribe("resolve will resolve a sequence of paths or path segments into an absolute path", () => {\n  test("dir should return /home/shanyuhai/Test/node-demos/dir1/dir2/dir3", () => {\n    const p = paths.dir;\n\n    expect(path.resolve(p)).toBe("/home/shanyuhai/Test/node-demos/dir1/dir2/dir3");\n  });\n\n  test("abDirSlash should return /dir1/dir2/dir3", () => {\n    const p = paths.abDirSlash;\n\n    expect(path.resolve(p)).toBe("/dir1/dir2/dir3");\n  });\n\n  test("oFile should return /home/shanyuhai/Test/node-demos/file.js", () => {\n    const p = paths.oFile;\n\n    expect(path.resolve(p)).toBe("/home/shanyuhai/Test/node-demos/file.js");\n  });\n\n  test("absolute normal path segment will link with the delimiter", () => {\n    expect(path.resolve(...segPath.abSPath)).toBe("/aaa/bbb/ccc");\n  });\n\n  test("if after processing all given path segments an absolute path has not yet been generated, the current working directory is used", () => {\n    expect(path.resolve(...segPath.nPath)).toBe("/home/shanyuhai/Test/node-demos/aaa/bbb/ccc");\n  });\n\n  test("absolute path segment in args will replace before", () => {\n    expect(path.resolve(...segPath.abIPath)).toBe("/bbb/ccc");\n  });\n\n  test(".. will back to the upper path level", () => {\n    expect(path.resolve(...segPath.bPath)).toBe("/ccc");\n  });\n\n  test("../.. will back to the upper two path level", () => {\n    expect(path.resolve(...segPath.b2Path)).toBe("/home/shanyuhai/Test/ccc");\n  });\n\n  test("multiple formats mixed", () => {\n    expect(path.resolve(...segPath.mPath)).toBe("/nnn/foo/bar/aaa");\n  });\n});\n\n// normalize 返回规范化的路径\ndescribe("normalize should return the normalized path", () => {\n  test("should return the normalized path and trailing separators are preserved", () => {\n    expect(path.normalize("foo/bar//baz/asdf/quux/../")).toBe("foo/bar/baz/asdf/");\n  });\n});\n\n// relative 返回 from 和 to 的相对路径\ndescribe("relative should return the relative path from `from` to `to`", () => {\n  test("absolute path", () => {\n    expect(path.relative("/home/shanyuhai", "/etc/zsh/zprofile")).toBe("../../etc/zsh/zprofile");\n  });\n\n  test("current path", () => {\n    expect(path.relative("node_modules/jest/", "node_modules/jest/bin/jest.js")).toBe("bin/jest.js");\n  });\n\n  // before compare they will be calling `path.resolve` on each, so they can get relative path\n  test("absolute to relative", () => {\n    expect(path.relative("/home/shanyuhai", "node_modules/jest/bin/jest.js")).toBe("Test/node-demos/node_modules/jest/bin/jest.js");\n  });\n});\n\n// sep 返回平台特定的路径片段分隔符\ndescribe("sep should return the platform-specific path segment separator", () => {\n  const paths = {\n    "/": "foo/bar/baz",\n    "\\\\": "foo\\\\bar\\\\baz"\n  }\n\n  test("should return correct array", () => {\n    const p = paths[path.sep]\n\n    if (path.sep === "/") {\n      expect(p.split(path.sep)).toStrictEqual(["foo", "bar", "baz"]);\n    }\n    if (path.sep === "\\\\") {\n      expect(p.split(path.sep)).toStrictEqual(["foo", "bar", "baz"]);\n    }\n  });\n});\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);