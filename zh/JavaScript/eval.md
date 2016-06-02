观点：在合适的时候可以使用eval，在没有**深入**了解eval的缺陷前不要使用

网上很多只是不推荐使用，但是和“不要使用”还是有点区别。

作为一个前端的初学者，有过几次看到听到别人让不要使用eval，模糊的原因是eval性能低、不安全。

后面review同事代码的时候，遇到eval，也就想着要改掉，好听点叫做重构。

可是这和我最近的学习思路有点不太一样，凡事应该知道细节，为什么用，为什么不用。

所以还是把eval好好的研究一下。

# 语法
```
obj.eval(string)
```
string是一段javascript代码

# 设计目的
本来想从specification里看看当初设计eval的原因，可是没有specification里包含这eval的内容。


# 缺陷
### 可读性差
传入的参数是字符串。如果代码很多，可读性会很差。
但是猜想eval设计的时候肯定不是希望执行一大堆的代码。
一堆代码放到一行，有点没法看。

不过es2015里的模版字符串，使用起来可读性会好一点。

### 直接调用和间接调用的结果不一致
间接调用
```
var foo = 1;
function test() {
    var foo = 2;
    var bar = eval;
    bar('foo = 3');
    return foo;
}
test(); // 2
foo; // 3
```
直接调用
```
var foo = 1;
function test() {
    var foo = 2;
    eval('foo = 3');
    return foo;
}
test(); // 2
foo; // 1
```

但是结果不同的的原因是什么呢？

### 安全性
```
var c = $('input').val();
var obj = eval('({username:'+c+'})');
```
如果我在文本框输入alert（1）会得到什么结果呢？，可想而知，跟sql注入一个道理，会破坏安全性。

alert其实倒没什么，假如说恶意往里面写入了调用接口的一个死循环呢

对这个安全性的解决方法，就是要保证eval里面的指是自己可控的，外部没有办法影响



# 什么时候要用eval
eval的设计到底是用来完成什么事情的，什么情况下使用是最佳的？

还需不需要使用这个方法

假如我们想要动态的执行一些代码还是有必要的

比如一个数组，有很多的元素，需要根据元素定义变量



```
var sb = new Array(
	'leftbox', 'rightbox', 'scrollLeft', 'scrollRight', 
	'caretPos', 'maxLength', 'textLength', 'availLength',
	'beforeCaret', 'afterCaret', 'selectedText'
);

for (var i in sb) eval('var ' + sb[i] + ' = {}')

```

比如要从页面上获取很多的元素给变量
```
var sb = new Array(
	'leftbox', 'rightbox', 'scrollLeft', 'scrollRight', 
	'caretPos', 'maxLength', 'textLength', 'availLength',
	'beforeCaret', 'afterCaret', 'selectedText'
);
for (var i in sb) eval(sb[i] + ' = document.getElementById(sb[i])')
```


### 元编程
有网友说
> eval的出现正是体现了javascript对待元编程的态度。 js目前本身没有反射机制，也没有php魔术方法强大的元编程能力，在js里我们只能通过eval来讲究着动态解析js


# 内容来源
[Javascript eval 为什么不推荐用](http://www.nihaoshijie.com.cn/index.php/archives/289)
[由eval生成的代码效率真的很差吗？](http://blog.zhaojie.me/2012/08/js-code-from-eval-benchmark.html)
[JavaScript eval()安全问题](https://www.v2ex.com/t/208978)
[12种不宜使用的Javascript语法](http://www.ruanyifeng.com/blog/2010/01/12_javascript_syntax_structures_you_should_not_use.html)
[window.eval 及相关方法总结](http://hax.iteye.com/blog/126544)

