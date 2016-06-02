new Vue开始

视图完全由数据驱动


# Vue实例
要知道构造函数里面可以传入哪些的值

数据：data（双向绑定的数据）
模版
挂载元素：el（使用vue框架的节点）
方法：methods
生命周期钩子：created、compiled、ready、destroyed


methods使用的this指向的是data里面定义的
这种指向属于javascript原生实现的，还是vue有做特殊处理的


# 数据绑定语法
数据绑定语法指的是我们在vue实例里面定义的data在哪些地方可以使用到

### 插值
文本、原始的HTM（注意安全性）、HTML特性

### 绑定表达式
JavaScript表达式、过滤器

### 指令
* 参数：v-bind:href="url" 与 href="{{url}}" 效果相同
* 修饰符：v-bind:href.literal="/a/b/c" 与 href="/a/b/c" 效果相同


### 缩写
v-bind => :
v-on => @

# 文档
[教程]()
[API](http://vuejs.org.cn/api/)



# 计算属性
在实例vue的时候，可以传入date、methods，
还可以传入computed, 这个里面放的就是计算属性

计算属性比使用$watch更好

# 实现细节
修改了js代码里变量的值，会直接反应到页面上，这一点在vue里是如何做到的

# 问题
vue的js放到最后面，页面上的vue代码会先显示，加载后再隐藏。
简单的说ng-cloak在vue里有没有对应的东西。

有对应的v-cloak

vue的js是不是只能放到header里面

# Tips
### v-cloak
```
[v-cloak] {
  display: none;
}
```
```
<div v-cloak>
  {{ message }}
</div>
```
