# DOM节点操作

```
<!-- id获取 -->
var root = document.getElmentById('root');

<!-- class获取 -->
var classDiv = document.getElementsByClassName('div')

<!-- 创建dom节点 -->
var div = document.createElement('div');
div.innerHTML = 123123;
div.setAttribute('id', 'iddiv');
root.appendChild(div);
console.log(document.getElmentById('root'));

<!-- 节点移除 -->
var iddiv = document.getElementById('iddiv');
console.log(iddiv);
root.removeChild(iddiv);

```
在视频中说到的异步问题是不对的，dom节点添加和移除是同步的，但是控制台 渲染将会以异步方式发生，所以就会出现视频上的情况。

问题参考：

[console异步还是同步](https://blog.csdn.net/tingyugetc11/article/details/77569010)

# DOM事件

```
var root = document.getElmentById('root');

<!-- 点击事件 -->
root.onclick = function (){

}

<!-- 鼠标放下事件 -->
root.onmousedown = function (){

}
```