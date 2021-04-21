---
title: expect spawn、linux expect 用法
---

使用expect实现自动登录的脚本，网上有很多，可是都没有一个明白的说明，初学者一般都是照抄、收藏。可是为什么要这么写却不知其然。本文用一个最短的例子说明脚本的原理。

脚本代码如下：
```
　　##############################################
　　#!/usr/bin/expect
　　set timeout 30
　　spawn ssh -l username 192.168.1.1
　　expect "password:"
　　send "ispass\r"
　　interact
　　##############################################
```
1. ［#!/usr/bin/expect］

　　这一行告诉操作系统脚本里的代码使用那一个shell来执行。这里的expect其实和linux下的bash、windows下的cmd是一类东西。
　　注意：这一行需要在脚本的第一行。

2. ［set timeout 30］

　　基本上认识英文的都知道这是设置超时时间的，现在你只要记住他的计时单位是：秒

3. ［spawn ssh -l username 192.168.1.1］

　　spawn是进入expect环境后才可以执行的expect内部命令，如果没有装expect或者直接在默认的SHELL下执行是找不到spawn命令的。所以不要用 “which spawn“之类的命令去找spawn命令。好比windows里的dir就是一个内部命令，这个命令由shell自带，你无法找到一个dir.com 或 dir.exe 的可执行文件。
　　它主要的功能是给ssh运行进程加个壳，用来传递交互指令。

　　4. ［expect "password:"］

　　这里的expect也是expect的一个内部命令，有点晕吧，expect的shell命令和内部命令是一样的，但不是一个功能，习惯就好了。这个命令的意思是判断上次输出结果里是否包含“password:”的字符串，如果有则立即返回，否则就等待一段时间后返回，这里等待时长就是前面设置的30秒

　　5. ［send "ispass\r"］

　　这里就是执行交互动作，与手工输入密码的动作等效。
　　温馨提示： 命令字符串结尾别忘记加上“\r”，如果出现异常等待的状态可以核查一下。

　　6. ［interact］

　　执行完成后保持交互状态，把控制权交给控制台，这个时候就可以手工操作了。如果没有这一句登录完成后会退出，而不是留在远程终端上。如果你只是登录过去执行
```
　　#!/usr/bin/expect #注意安装的路径，不确定 whereis expect 一下
　　# Change a login shell to bash
　　set user [lindex $argv 0]
　　spawn bash $user
　　expect "]:"
　　send "/bin/bash "
　　expect eof
　　exit
```

使用expect自动登录

一，什么是expect?
在做系统管理时，我们很多时候需要输入密码，例如：连接 ssh,连接ftp,
那么如何能做到不输入密码吗？
我们需要有一个工具，能代替我们实现与终端的交互，
那么，就是它：expect，管理员的最好的朋友之一
它能够代替我们实现与终端的交互，我们不必再守候在电脑旁边输入密码，
或是根据系统的输出再运行相应的命令，
这些都可以由expect代替我们来完成

说明：expect到底是什么？
expect是一种脚本语言，使用起来非常简单，我们看后面的例子即可以了解到了

三，安装expect

备注：因为expect是基于tcl的，所以需要你的系统中安装有tcl
如何检查？
```
[root@dev ~]# whereis tcl
tcl: /usr/lib/tcl8.4 /usr/share/tcl8.4

如果看不到结果，请先安装tcl
安装,
[root@dev ~]# yum install expect
也可以从http://rpm.pbone.net下载for相应发行版的rpm包
```

四，使用expect自动登录的例子
1,程序例子的内容 :
先做功能 上的说明
此程序ssh登录到作为参数传递过来的ip地址上
然后执行: df -h
free -m
uptime
来检查系统的情况

```
[root@dev ~]# cat monitor_auto
#!/usr/bin/expect -f

#-------------------------------------------------- about us
# product: monitorone
# Author: liuhongdi <hongdi.liu@chinafotopress.com>
# Last Modified: 2008-05-13
# version: 0.3.2
# user:this script will help you to monitor many linux(unix) machine
# license: this script is based GPL

#-------------------------------------------------- set the variable,you can modify the value

set loginuser "root"
set loginpass {passwordonthishost}

set ipaddr [lrange $argv 0 0]
set timeout 300
set cmd_prompt "]#|~]?"

#-------------------------------------------------- login by ssh
spawn ssh $loginuser@$ipaddr
set timeout 300
expect {
-re "Are you sure you want to continue connecting (yes/no)?" {
send "yes\r"
} -re "assword:" {
send "$loginpass\r"
} -re "Permission denied, please try again." {
exit
} -re "Connection refused" {
exit
} timeout {
exit
} eof {
exit
}
}

expect {
-re "assword:" {
send "$loginpass\r"
}
-re $cmd_prompt {
send "\r"
}
}

#---------------------------------------------------- now,we do some commands
exec sleep 1
expect {
-re $cmd_prompt {
send "df -h\r"
}
}

exec sleep 1
expect {
-re $cmd_prompt {
send "free -m\r"
}
}

exec sleep 1
expect {
-re $cmd_prompt {
send "uptime\r"
}
}
exec sleep 1


#--------------------------------------------------
expect {
-re $cmd_prompt {
send "exit\r"
}
}


exit
#interact

2,程序 运行的显示结果

[root@dev ~]# ./monitor_auto 209.209.94.107
spawn ssh root@209.209.94.107
root@209.209.94.107's password:
Last login: Sun Feb 15 01:42:39 2009 from 201.103.105.49

[root@ws ~]#
[root@ws ~]# df -h
Filesystem ÈÝ ÒÑÓÃ ¿ÉÓÃ ÒÑÓÃ% ¹ÒÔصã
/dev/mapper/VolGroup00-LogVol00
133G 72G 55G 57% /
/dev/sda1 99M 13M 82M 14% /boot
none 1014M 0 1014M 0% /dev/shm
209.209.94.109:/www/pics
5.9T 5.6T 138G 98% /bank/bank1
[root@ws ~]# free -m
total used free shared buffers cached
Mem: 2026 1955 71 0 72 1621
-/+ buffers/cache: 261 1764
Swap: 1983 68 1915
[root@ws ~]# uptime
01:48:00 up 561 days, 8:53, 2 users, load average: 0.13, 0.09, 0.07
[root@ws ~]# [root@dev ~]#


四，对此程序的详细说明:
1,set loginuser "root"
set用来定义变量，定义之后的代码中可以使用所定义的变量
使用时注意需添加$符号
使用时的例子: spawn ssh $loginuser@$ipaddr 
```


[源文件地址](https://blog.csdn.net/ysdaniel/article/details/7059511)