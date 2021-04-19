(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{366:function(a,t,e){"use strict";e.r(t);var s=e(42),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"git-push问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-push问题"}},[a._v("#")]),a._v(" Git push问题")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git add .\ngit ci -m 'first my'\ngit push origin HEAD:refs/for/master\n")])])]),e("p",[a._v("** 解释 **")]),a._v(" "),e("p",[a._v("git push <remote 名字> <本地分之的名字> : <远程库的名字>")]),a._v(" "),e("p",[a._v("git push 推送")]),a._v(" "),e("p",[a._v("origin 远程库的名字")]),a._v(" "),e("p",[a._v("HEAD是一个特别的指针，它是一个指向你正在工作的本地分之的指针，可以把它当做本地分之的别名，git这样就可以知道你工作在哪个分之")]),a._v(" "),e("p",[a._v("refs/for意义在于我们提交代码到服务器之后是需要code review之后才能进行merge的")]),a._v(" "),e("p",[a._v("refs/heads 不需要")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//撤销\ngit reset --hard <commit_id>\n")])])]),e("h2",{attrs:{id:"fetch-vs-pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch-vs-pull"}},[a._v("#")]),a._v(" fetch VS pull")]),a._v(" "),e("ol",[e("li",[a._v("简单概括")])]),a._v(" "),e("p",[e("img",{attrs:{src:"http://kmknkk.oss-cn-beijing.aliyuncs.com/image/git.jpg",alt:"git fetch和 git pull 概念"}})]),a._v(" "),e("p",[a._v("git fetch是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。")]),a._v(" "),e("p",[a._v("而git pull则是将远程主机的最新内容拉下来后直接合并，即git pull = git fetch + git merge,这样可能会产生冲突，需要手动解决。")]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("分支的概念")])]),a._v(" "),e("blockquote",[e("p",[a._v("分支是用来标记特定代码的提交，每一个分支通过SHA1sum值标识，所以分支分支的操作是轻量级的，你可以改变的仅仅是SHA1sum值")])]),a._v(" "),e("p",[a._v("如，当前两个分支，A,C,E属于master分支，而A,B,F属于dev分支")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("A---C---E(master)\n \\ \n  B---D---F(dev)\n")])])]),e("p",[a._v("它们的head指针分别指向E和F，对上述做如下操作")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git checkout master //选择or切换到master分支\ngit merge dev //讲dev分支合并到当前分支master中\n")])])]),e("p",[a._v("合并完成后")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("A---C---E----G（master）\n\\           /\n B---D----F(dev)\n")])])]),e("p",[a._v("现在ABCDEFG属于master分支，G是一次合并后的结果，是将E和F的代码合并后的结果，可能会出现冲突，而ABDF依然属于dev分支，可以继续在dev分支上开发")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("A---C---E----G（master）\n\\           /\n B---D----F-----I(dev)\n")])])]),e("p",[a._v("分支的基本操作")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git branch //查看本地所有分支\ngit branch -r //查看远程所有分支\ngit branch -a //查看本地和远程的所有分支\ngit branch <branchname> //新建分支\ngit branch -d <branchnae> //删除本地分支\n\ngit branch -d -r <branchname> //删除远程分支，删除后还需推送到服务器\ngit push origin:<branchname> //删除后推送至服务器\n\ngit branch -m <oldbranch> <newbranch> //重命名本地分支\n\n//git中的一些选项解释\n-d \n--delete：删除\n\n-D\n--delete --force的快捷键(强制)\n\n-d \n--force 强制\n\n-m\n--move移动或重命名\n\n-M\n--move --force的快捷键\n\n-r\n--remote远程\n\n-a\n--all 所有\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("git fetch用法")])]),a._v(" "),e("p",[a._v("git fetch命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fetch <远程主机> //这个命令是将某个远程主机的更新全部去回到本地\n")])])]),e("p",[e("strong",[a._v("如果只想取回特定分支的更新，可以指定分支名")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fetch <远程主机> <分支名>\n")])])]),e("p",[a._v("最长见的命令是取回origin主机的master分支")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fetch origin master\n")])])]),e("p",[a._v("取回更新后，会返回一个FETCH_HEAD,指的是某个branch在服务器上的最新状态，我们可以在本地通过它查看刚去会的更新信息")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git log -p FETCH_HEAD\n")])])]),e("p",[a._v("可以看到返回的信息更新的文件名，更新的作者和时间，以及跟新的代码")]),a._v(" "),e("p",[a._v("我们可以通过这些信息判断是否产生冲突，以确定是否更新merge到当前分支")]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("git pull 用法")])]),a._v(" "),e("p",[a._v("git pull的过程可以理解为")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fetch origin master //从远程主机master分支拉去最新内容\ngit merge FEATCH_HEAD//将拉去下来的最新内容合并到当前所在的分支中\n")])])]),e("p",[a._v("即将远程的某个分支更新取回，并与本地指定的分支合并")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git pull <远程主机名> <远程分支名>:<本地分支名>\n//如果远程分支与当前分之合并，则冒号后面的部分可省略\ngit pull origin dev\n")])])]),e("h2",{attrs:{id:"git-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[a._v("#")]),a._v(" Git rebase")]),a._v(" "),e("h3",{attrs:{id:"合并多个commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并多个commit"}},[a._v("#")]),a._v(" 合并多个commit")]),a._v(" "),e("p",[a._v("在使用Git作为版本控制的时候，我们可能会由于各种各样的原因提交了许多临时的commit，而这些commit拼接起来才是完整的任务。那么我们未了避免太多的commit而造成版本控制的混乱，通常我们推荐将这些commit合并成一个。")]),a._v(" "),e("h5",{attrs:{id:"查看提交历史-git-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史-git-log"}},[a._v("#")]),a._v(" 查看提交历史，git log")]),a._v(" "),e("p",[a._v("首先你要知道自己想要合并的是哪几个分支，可以使用git log命令来查看提交历史，例如最近4条历史如下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("commit 3ca6ec340edc66df13423f36f52919dfa3......\n\ncommit 1b4056686d1b494a5c86757f9eaed844......\n\ncommit 53f244ac8730d33b353bee3b24210b07......\n\ncommit 3a4226b4a0b6fa68783b07f1cee7b688.......\n")])])]),e("p",[a._v("历史记录是按照时间排序的，时间近的排在前面")]),a._v(" "),e("h5",{attrs:{id:"git-rebase-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-2"}},[a._v("#")]),a._v(" git rebase")]),a._v(" "),e("p",[a._v("想要合并1-3条，有两个方法")]),a._v(" "),e("ol",[e("li",[a._v("从HEAD版本开始往过去数3个版本")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git rebase -i HEAD~3\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("指名要合并的版本之前的版本号")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git rebase -i 3a226a\n")])])]),e("p",[a._v("请注意3a226a这个版本是不参与合并的，可以把它当做一个坐标")]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("选取要合并的提交")])]),a._v(" "),e("p",[a._v("1.执行了rebase命令之后，会弹出一个窗口，头几行如下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pick 3ca6ec3   '注释**********'\n\npick 1b40566   '注释*********'\n\npick 53f244a   '注释**********'\n\n")])])]),e("p",[a._v("2.将pick改为squash或者s,之后保存并关闭文本编辑窗口即可。改完之后文本内容如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pick 3ca6ec3   '注释**********'\n\ns 1b40566   '注释*********'\n\ns 53f244a   '注释**********'\n\n")])])]),e("p",[a._v("3.然后保存退出，Git会压缩提交历史，如果有冲突，需要修改，修改的时候要注意，保留最新的历史，不然我们的修改就丢弃了。修改以后要记得敲下面的命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git add .  \n\ngit rebase --continue  \n")])])]),e("p",[a._v("如果你想放弃这次压缩的话，执行以下命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git rebase --abort\n")])])]),e("p",[a._v("4.如果没有冲突，或者冲突已经解决，则会出现如下的编辑窗口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# This is a combination of 4 commits.  \n#The first commit’s message is:  \n注释......\n# The 2nd commit’s message is:  \n注释......\n# The 3rd commit’s message is:  \n注释......\n# Please enter the commit message for your changes. Lines starting # with ‘#’ will be ignored, and an empty message aborts the commit.\n")])])]),e("p",[a._v("5.输入wq保存并推出, 再次输入git log查看 commit 历史信息，你会发现这两个 commit 已经合并了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);