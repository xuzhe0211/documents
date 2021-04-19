---
title: axios 
---

- [Content-Type: application/json](#application/json)
- [Content-Type: multipart/form-data](#multipart)
- [Content-Type: application/x-www-form-urlencoded](#urlencoded)
- [curl请求测试](#curl请求测试)

## Post提交数据的三中请求方式
### Content-Type:application/json

```
import axios from 'axios';
let data = {'code':'1234', 'name': 'yyyy'};
axios.post(`${this.$url}/test/testRequest`, data).then(res=> {
	console.log(res);
})
```
![applicaton/json](https://image-static.segmentfault.com/170/795/1707953106-5b1f3a605ad63_articlex)

### Content-Type:multipart/form-data
```
import axios from 'axios';
let data = new FormData();
data.append('code', '1234');
data.append('name', 'yyyy');
axios.post(`${this.url}/test/testRequest`, data).then(res=> {
	console.log(res);
})
```
![multipart/form-data](https://image-static.segmentfault.com/138/334/1383341606-5b1f3acfc12d1_articlex)


### Content-Type:application/x-www-form-urlencoded

```
import axios from 'axios';
import qs from 'Qs';
let data = {'code': '123', 'name': 'yyy'};
axios.post(`${this.$url}/test/testRequest`, qs.stringify({
	data
})).then(res => {
	console.log(res);
})
```

![form-urlencoded](https://image-static.segmentfault.com/336/101/3361010732-5b1f3b3c0419c_articlex)


### 总结

1. 从jquery转到axios最难忘的就是设置Content-Type，还好现在都搞定了他们的原理
2. 上面三种方式对应后台的请求方式，这个也要注意，比如java的@RequestBody,HttpSevletRequest等等



## 测试请求curl

```
// get请求方式
curl -X GET --header 'Accept: application/json' 'http://10.138.36.142:8099/v2x/calibration/device/detail?id=12'

// post请求
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '12' 'http://10.138.36.142:8099/v2x/calibration/device/delete'
```