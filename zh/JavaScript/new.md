new关键字怎么理解

new的后面跟的是什么 Class, Function ?

# new关键字做了什么
在JavaScript中，使用new关键字后，意味着做了如下四件事情：

* 创建一个新的对象，这个对象的类型是object；
* 设置这个新的对象的内部、可访问性和[[prototype]]属性为构造函数（指prototype.construtor所指向的构造函数）中设置的；
* 执行构造函数，当this关键字被提及的时候，使用新创建的对象的属性；
* 返回新创建的对象（除非构造方法中返回的是‘无原型’）。

[『JavaScript』new关键字](http://www.cnblogs.com/sitemanager/p/3535959.html)

[What is the 'new' keyword in JavaScript?](http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript)
