# Sinon

我们写测试的时候，可能会依赖蛮多情况的

* 如果调用了后台接口，我们需要网络，还需要后台返回数据
* 如果用了数据库，还需要首先在数据里面模拟好数据

这就意味着我们写测试代码会很困难，因为我们需要先去准备相关的环境

而Sinon就是帮助我们解决这些问题的

但是使用Sinon并不是很简单，我们需要使用Sinon里面的多种特性：spies，stubs，mocks。
我们需要知道在什么时候使用哪个特性。

## 类比

拍电影的时候，我们会邀请很多的大明星，但是有些场景或者场景大明星并不会，比如说专业的飞车动作，拍摄的时候难度大也危险。

这个时候，剧组通常会找一个专业的飞车手，来代替大明星完成这样的高难度的动作。

这种叫做***特技替身演员***。

Sinon做的事情就和这个特技替身演员做的事情是一样的

一般会把这个叫做test doubles (测试替身)

## 概念补充
### Function类型
* 没有依赖外部的function：只依赖于函数的参数，只要函数的参数不变，函数的返回就不会变
* 有依赖外部的function：依赖于数据库里的数据，当前时间等

### Spies
* function被调用了几次
* 每次调用传入了什么参数
* 每次调用返回结果是什么
* 每次调用的抛的错误是什么

和assertion配合起来后，可以用来检查不同的结果

需要知道spy有哪些api可以使用

### Stubs
不仅替换原来的function, 他们还可以添加一些自定义的行为，比如返回一个值或者抛出异常。
如果使用函数作为参数，也可以调用该函数作为回调

* 可以替换掉比较麻烦的的一段代码
* 触发一般情况可能走不到的代码，比如说错误处理
* 可以用来帮助测试异步的代码

***替换掉麻烦的代码***
假如代码里有连接数据库、网络链接等，这种通常都依赖于人工的设置。
比如我们写测试时，需要往数据库插入数据，无疑让测试更加复杂了。

我们可以使用stub将麻烦的代码替换掉，比如将数据库操作的地方替换掉

```
it('should pass object with correct values to save', function() {
  var save = sinon.stub(Database, 'save');
  var info = { name: 'test' };
  var expectedUser = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  setupNewUser(info, function() { });

  save.restore();
  sinon.assert.calledWith(save, expectedUser);
});
```


## 什么时候使用
写测试代码需要替身的时候

## Stub
stub中文是桩的意思

> Stub:
  For replacing a method with code that returns a specified result

stub 可以理解为测试桩，它能实现当特定的方法被调用时，返回一个指定的模拟值。
如果你的测试用例需要一个伴生对象来提供一些数据，可以使用 stub 来取代数据源，在测试设置时可以指定返回每次一致的模拟数据。

简单说就是你可以用stub去伪造(fake)一个方法,阻断对原来方法的调用

如何用代码来描述特定的方法被调用返回特定的模拟值

## Mock
> Mock:
  A stub with an expectations that the method gets called.

简单来说mock就是stub + expectation, 说它是stub是因为它也可以像stub一样伪造方法, 阻断对原来方法的调用, 
expectation是说它不仅伪造了这个方法,它还期望你(必须)调用这个方法,如果没有被调用到,这个test就fail了


## Sinon




mock～

sinon.mock(obj)

类似于装饰器模式，给obj添加了一些方法，并返回





## 资料
[Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
http://objccn.io/issue-15-5/
https://ruby-china.org/topics/10977
[用 Mocha/Chai/Sinon 测试 JavaScript 代码](http://codethoughts.info/javascript/2015/07/18/javascript-bdd-with-mocha-chai-sinon/)




在看一个seed项目的时候，里面用了mock，然后也用了sinon

Mocha 是一个 JavaScript 测试框架，可以用来运行测试代码，它没有内置的 Assertion，Mock 和 Stub 功能。
一般我们用 Chai 来为它提供断言，用 Sinon 为它提供 Mock 和 Stub 功能。

那么这里所说的Stub功能是指的什么含义呢？
