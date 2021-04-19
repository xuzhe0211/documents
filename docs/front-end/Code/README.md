---
title: 算法
---

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

