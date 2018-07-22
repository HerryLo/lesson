var root = document.getElementById('root');

console.log(root);

var classDiv = document.getElementsByClassName('div');

console.log(classDiv);

// 节点插入
var div = document.createElement('div');

div.innerHTML = 123123;
div.setAttribute('id', 'iddiv');

root.appendChild(div);
console.log(document.getElementById('root'));
// 在视频中说到的异步问题是不对的，dom节点添加和移除是同步的，但是控制台 渲染将会以异步方式发生，所以就会出现视频上的情况。

// 节点移除
var iddiv = document.getElementById('iddiv');

console.log(iddiv);

root.removeChild(iddiv);
console.log(45);

// DOM事件
root.onclick = function(){
    alert('点击 root');
    console.log(123);
}

