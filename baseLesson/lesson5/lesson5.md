# js基本变量

类型
```
undefind
String
Number
Boolean
Array
Object
function
```

常见声明方式
```
<!-- undefind -->
var unde;
console.log(unde);

<!-- String -->
var str = 'wer';
// typeof 判断变量类型
console.log(typeof unde);

<!-- Number -->
var num = 1234
console.log(typeof num);

<!-- Boolean -->
var bool = false
console.log(typeof bool);

<!-- Array -->
var arr = [12,'234', "wer", false, 'undefind'];
console.log(typeof arr);
console.log(arr instanceof Array);

<!-- object -->
var obj = {
    key: 123141241,
    arr: [12,'234', "wer", false, 'undefind'],
    bool: false,
    str: '123',
}
console.log(obj instanceof Object)

<!-- function -->
// 函数调用
function add(params) {
    var a = '123'
    console.log(a, params)
}

add(13);
```

## 数组

```
<!-- 循环 -->
for(var i=0;i<Array.length;i++){
	console.log(Array[i])
}

<!-- 循环判断 -->
for(var i=0;i<Array.length;i++){
	if(i >= 3){
		console.log(Array[i])
	}
}
```

## 定时器
```
var i = 0;
var time = setInterval(()=> { 
    i++;
    console.log(i);
    if(i > 10){ 
        <!-- 清除定时器 -->
        clearInterval(time) 
    } 
}, 100)
```