---
title: 算法
---

## 快排

### 阮一峰老师的js快排实现
1. 选择数组中间书作为基数，并从数组中取出此基数
2. 准备两个数组容器，遍历数组，逐个与基数比对，较小的放左容器，较大的放右容器
3. 递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组返回

```
var quickSort = function(arr) {
    if (arr.length <= 1) return arr;
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
```
**总结**

思路非常清晰，选择基数作为参照，划分数组,分而治之，对于新手来理解快排的核心思想"参照-划分-递归"，很容易理解

既实现了排序，又符合快速排序的思想，为什么还会有人诟病呢，是因为：

1. 取基数用的是splice()函数取，而不是算法中常用的取下标。基数只是一个参照对象，在比对的时候，只要能从数组中取到就好，所以只需要知道它的索引，调用函数删除基数只会更耗时。

2. 根据基数来划分时,专门生成两个数组来存储，从而占用更多的存储空间(增加了空间复杂度)

严格来讲，还有更多改进之处

### 文章中提出的快排js实现

思路：

1、通过下标取中间数为基数；

2、从起点往后寻找比基数大的，记录为下标 i；再从终点往前寻找比基数小的，记录为下标 j，当 i <= j时，原地交换数值；

3、重复步骤2，直到遍历所有元素，并记录遍历的最后一个下标 i，以此下标为分界线，分为左右两边，分别重复步骤1~3实现递归排序；

实现（为方便理解，在原文基础上有所合并）：

```
// 快排改进——黄佳新
var devide_Xin = function (array, start, end) {
    if(start >= end) return array;
    var baseIndex = Math.floor((start + end) / 2), // 基数索引
            i = start,
            j = end;

    while (i <= j) {
        while (array[i] < array[baseIndex]) {
            i++;
        }
        while (array[j] > array[baseIndex])  {
            j--;
        }

        if(i <= j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

var quickSort_Xin = function (array, start, end) {
    if(array.length < 1) {
        return array;
    }
    var index = devide_Xin(array, start, end);
    if(start < index -1) {
        quickSort_Xin(array, start, index - 1);
    }
    if(end > index) {
        quickSort_Xin(array, index, end);
    }

    return array;
}
```
总结：

1、用下标取基数，只有一个赋值操作，跟快；

2、原地交换，不需要新建多余的数组容器存储被划分的数据，节省存储；

比较：

相较而言，理论分析，实现二确实是更快速更省空间，那么事实呢？
<img :src="$withBase('/images/1115094-20180614151451933-1234664957.png')" alt="耗时比较">

以上是实现一与实现二在chrome上测试耗时的统计结果，测试方案为：各自随机生成100万个数（乱序）,分别完成排序，统计耗时。

结论：

事实上，乱序排序，实现二更快。

### 三、网上其他的快排js实现

思路：

1、通过下表取排序区间的第0个数为基数

2、排序区间基数以后，从右往左，寻找比基数小的，从左往右，寻找比基数大的，原地交换；

3、重复步骤2直到 i >= j；

4、将基数与下标为 i 的元素原地交换，从而实现划分；

5、递归排序基数左边的数，递归排序基数右边的数，返回数组。

```
var quickSort_New = function(ary, left, right) {
    if(left >= right) {
        return ary;
    }

    var i = left,
            j = right;
            base = ary[left];

    while (i < j) {
        // 从右边起，寻找比基数小的数
        while (i<j && ary[j] >= base) {
            j--;
        }

        // 从左边起，寻找比基数大的数
        while (i<j && ary[i] <= base) {
            i++
        } 

        if (i<j) {
            var temp = ary[i];
            ary[i] = ary[j];
            ary[j] = temp;
        }
    }

    ary[left] = ary[i];
    ary[i] = base;

    quickSort_New(ary, left, i-1);
    quickSort_New(ary, i+1, right);

    return ary;
}
```

总结：

除选基数不同以外，其他与实现二类似。

另外：

比较一下实现二与实现三的速度，结果如下：
<!-- ![二三比较](/images/1115094-20180614154538001-997011957.png) -->
<img :src="$withBase('/images/1115094-20180614154538001-997011957.png')" alt="foo">
多次测试结果均为：实现二耗时略小于实现三，偶尔出现大于的情况，但相差不大。


## 扑克牌问题

  有一堆扑克牌，将牌第一张放到桌子上，在将接下来牌的第一张放到牌底，如此往复；最后桌子上的牌顺序为:(牌底)1，2，3，4，5，6，6，7，8，9，10，11，12，13(牌顶)；<br/>
  问：原来牌的顺序，用函数实现
  ```
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  let _arr = [];
  function sortPoke() {
      while(arr.length > 0) {
          //选择抽取哪张牌
          if(arr.length % 2 === 1) {
              _arr.push(arr.pop());
          } else {
              _arr.push(arr.shift());
          }
      }
      return _arr;
  }
  console.log(sortPoke())
  //[13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7]
  ```
## JavaScript 深拷贝
  ```
  //
  function copyObj(obj) {
      var newobj = {};
      for(const key in obj) {
          if(typeof obj[key] === 'object') {
              newobj[key] = copyObj(obj[key])
          } else {
              newobj[key] = obj[key]
          }
      }
      return newobj;
  }
  /** MessageChannel接口允许创建一个新的消息通道，并通过它的两个MessagePort属性发送数据。MessageChannel接口实例化以后，会有两个属性port1和port2.**/
  function copyObj(obj) {
      return new Promise(resolve => {
          const { port1, port2 } = new MessageChannel();
          port1.postMessage(obj);
          port2.onmessage = ev => resolve(ev.data);
      })
  }
  var obj1 = {a:1}
  var clone1 = await structuralClone(obj1)
  ```
## 盛水最多的容器---双指针法
  ```
  var maxArea = function(height) {
      var left = 0;
      var right = height - 1;
      var max = 0;
      while(left < right) {
          var now = (right - left) * Math.min(height[right], height[left]);
         max = now > max ? now : max;
         if (height[left] > height[right]) {
          right --;
          } else {
          left++;
         }
      }
      return max;
  }
  ```
## 大数相加

  思路遍历两个字符串从个位数算起开始相加，定义temp接受两个数之和，除以10取余拼接上结果，最后判断temp是否大于0，如果大于9则进位temp=1

```
var addstring = function(num1, num2) {
    var len1 = num1.length, len2 = num2.length; temp = 0; res = '';
    while(len1 || len2) {
        if(len1) {
            temp += +num1[--len1];
        }
        if(len2) {
            temp += +num2[--len2];
        }
        res  = temp % 10 +res;
        if(temp > 9) {
            temp =1;
        } else {
            temp = 0;
        }
        if (temp) {
            res = 1 +res; 
        }
    }
    return res;
}
```

## sqrt

  ```
  var mySqrt = function(x) {
       if (x < 2) return x
       let left = 1, mid, right = Math.floor(x / 2);
       while (left <= right) {
          mid = Math.floor(left + (right - left) / 2)
          if (mid * mid === x) return mid
          if (mid * mid < x) {
              left = mid + 1
          }else {
              right = mid - 1
          }
       }
       return right
  };
  ```

## 恢复空格

  哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer.It still didn't boot!"已经变成'iresetthecomputeritstilldidntboot'。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary,不过有些词没在词典里。假设文章用sentence表示，设计一个是算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

  注意：本题对原题稍作改动，只需返回未识别的字符数

  ```
  //示例
  输入：dictionary = ['looked', 'just', 'like', 'her', 'brother'];
  sentence = 'jesslookedjustliketimherbrother';
  输出 7
  解释：断句后'jess looked just like tim her brother',共7个未识别字符。

  var respace = function(dictionary, sentence) {
       if(sentence.length == 0) return 0;
      let dp = new Array(sentence.length).fill(0);
      for(let i = 1;i<=sentence.length;i++){
          dp[i] = dp[i-1]+1;
          // 上面表示，如果没有匹配那么dp[i]相比于dp[i-1]直接多1
          // 接着讨论如果新加一个字符，组成了一个词的情况
          for(let j=0;j<dictionary.length;j++){
              let word = dictionary[j].length;
              if(dictionary[j] == sentence.substring(i-word,i) && word<=i){
                  dp[i] = Math.min(dp[i],dp[i-word]);
              }
          }
      }
      return dp[sentence.length]
  };
  ```
## 两个数组的交集

  ```
  /**
  给定两个数组，编写一个函数来计算它们的交集。
  示例1：
  输入：nums1 = [1,2,2,1], num2 = [2,2];
  输出： [2,2]
  说明：
     输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致
     我们可以不用考虑输出结果的顺序
  **/
  var intersect = function(nums1, nums2) {
      let tmp = [], arr = [];
      if(nums1.length > nums2.length) {
          tmp = nums1;
          nums1 = nums2;
          nums2 = tmp;
      }
      for (let key of nums1) {
          temp = nums2.indexOf(key);
          if(temp > -1) {
              arr.push(key);
              nums2.splice(temp, 1);
          }
      } 
      return arr;
  }


  // 交集并集差集
    var set1 = new Set([1,2,3]);
    var set2 = new Set([2,3,4]);

    并集
    let union = new Set([...set1, ...set2]);

    交集
    let intersect = new Set([...set1].filter( x => set2.has(x)));

    差集
    let difference = new Set([...set1].filter(x => !set2.has(x)));


  ```
## 分割数组最大值

  给定一个非负整数数组和一个整数m,你需要将这个数组分成m个非空的连续子数组。设计一个算法使得这个m个子数组各自和的最大值最小。
  ```
  //贪心算法
  var splitArray = function(nums, m) {
      let left = 0; right = 0;
      let len = nums.length;
      for(let i = 0; i < len; i++) {
          right += nums[i];
          if(left < nums[i]) {
              left = num[i];
          }
      }
      function check(mid, m) {
          let sum = 0;
          let cnt = 1;
          for (let i = 0; i < len; i++) {
              if (sum + nums[i] > mid) {
                  cnt++;
                  sum = nums[i];
              } else {
                  sum += nums[i];
              }
          }
          return cnt <= m;
      }
      while(left < right) {
          let mid = Math.floor((left + right) / 2);
          if (check(mid, m)) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      return left;
  }
  ```
### 链表
1. 判断单链表是否带环
```
//第一种方法
function judge(list) {
	var set = new Set();
    while(list) {
    	if (set.has(list)) {
        	console.log('存在环')；
            console.log(list);
            return true;
        }
        set.add(list);
        list = list.next();
    }
    return set;
}
//快慢指针，设定快指针fast,慢指针slow,每次循环快指针fast移动两个位置，慢指针移动一个位置
function judge(list) {
	//创建快慢指针
    var fast = list.next.next,
    	slow = list.next;
    while(list) {
    	if (fast === slow) {
        	console.log('存在环')；
            console.log('fast:', fast);
            console.log('slow:', slow);
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
}
```

## 逻辑思维
+ 一个班级60%喜欢足球，70%喜欢篮球，80%喜欢排球，问即三种球都喜欢占比有多少？
  三个都喜欢的人数最多时，就尽量重复排列
  60 70(10人喜欢一个)
  70 80(现共有80人， 60人喜欢三个 ，10人喜欢两个， 10人喜欢一个)

  所以10%- 60%

