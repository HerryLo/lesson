# 样式


## css引入方法
```

内联 \ 嵌入 \ 外部 三种样式引入方法

内联: 
        style="color:red;"

嵌入: 
        <style>
        /* 嵌入 */
        /* flex 盒模型  常用布局*/
        #div{
            background: red;
            width: 800px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 300px;
        }
    </style>
外部: 
        <link rel="stylesheet" href="./lesson44.css">

```
优先级 内联 -> 嵌入 -> 外部

优先级 id -> class

其中id唯一，class允许多个使用

## css的盒模型

目前前端用到的最常见的布局 flex

```
.div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 200px;
    background: red;
}
.div_wrap{
    height: 150px;
    width: 100px;
    background: green;
}

<body>
    <div id="div" >
        <div class="div_wrap">132123</div>
        <div class="div_wrap">123123</div>
        <div class="div_wrap">123123</div>
    </div>
</body>
```

可以直接搜索flex 布局