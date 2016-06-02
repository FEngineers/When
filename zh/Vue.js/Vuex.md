[Vuex官方文档中文版](http://vuex.vuejs.org/zh-cn/index.html)

> State Management Architecture


# 类比

# 为什么要使用
* 大规模的、复杂的vue项目
* 共享组件内部状态
* 某一组件的改变去更新兄弟组件
* 统一的管理state

# 没有vuex之前怎么实现
* 使用一个service保存static的变量和static的方法，getter、setter
* 事件ping-pong，子组件dispatch到父组件，父组件broadcast

# 两种状态
* component local state 组件的本地状态
* application level state 应用状态

组件可以监听应用级的状态

# store
store是装有很多state的容器


修改store里的state是通过mutation
state改变后会去重新渲染component


不要直接修改state，（类似于react里不会直接去修改state）


# 比较两种代码

没有vuex时

有vuex时

通过increment的例子




# 项目目录结构
[应用结构](https://github.com/vuejs/vuex/blob/master/docs/zh-cn/structure.md)
[structure](https://github.com/vuejs/vuex/blob/master/docs/en/structure.md)

每个page下面应该有自己的action, mutation, store
是该有好，还是不该有更好


用来管理当前这个页面的数据流，页面还是要独立模块一点，调用外面的文件夹结构，除非代码是共用的



如果不同的page共用的vuex放到common里面


# 资料
[Vue刚出不久，Vuex 就出来了，想请教下Vuex做了什么事情？](https://www.zhihu.com/question/38209295)






