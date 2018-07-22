var root = document.getElementById('root');

console.log(root);

var classDiv = document.getElementsByClassName('div');

console.log(classDiv);

// 节点插入
var div = document.createElement('div');

div.innerHTML = 123123;
div.setAttribute('id', 'iddiv');

root.appendChild(div);

// 节点移除
var iddiv = document.getElementById('iddiv');

console.log(iddiv);
console.log(document.getElementById('root'));

root.removeChild(iddiv);
console.log(45);

// DOM事件
root.onclick = function(){
    alert('点击 root');
    console.log(123);
}

