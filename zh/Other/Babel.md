因为现在es2015的有些特性还没有被所有的浏览器都支持，所以我们如果使用es2015的特性来写代码，我们就需要一个工具，将es2015的语法转成es5.

babel有不同的版本，现在一般用的多的是babel5和babel6

### 首先一个问题，为什么babel5用的好好的，要升级到babel6呢
原因是越来越多的库升级到了babel6，如果本地使用babel5，会出现一些warning，比如告诉我们说某某库使用的是babel6之类的话。


使用babel6的时候，我们需要设置ES2015 preset



# babel-plugin-transform-runtime

# babel-runtime


[babel6 升级总结](https://segmentfault.com/a/1190000004301150)
[走进Babel 6.0 全新特性解析](http://www.csdn.net/article/2015-11-17/2826233)
[在node中使用babel6的一些简单分享](https://cnodejs.org/topic/56460e0d89b4b49902e7fbd3)
