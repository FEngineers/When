Range可以更复杂的选择页面上的内容，比如可以从某一个元素的中间开始，也可以从某一个元素的中间结束。

通过Range对象是设定了一个范围，然后我们可以根据这个范围做一些事情。

# Specifications

> 如果你愿意看Specifications, 本文就不用看解释了，看看列举的一些例子即可

[Document Object Model Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Interface)

# Specification 理解
Range指明了一个范围的内容。通过Range结束和开始的分界点，我们可以选择之间的所有内容。

页面上也有可能存在多个的Range

# 例子

1. 比如在页面上用鼠标点击了一个点，移动鼠标到另一个地方，再次点击，这个时候，在页面上就设置了两个点，我们就可以获取到这两个点之间的内容

# JavaScript DOM Ranges

[JavaScript DOM Ranges](http://www.wrox.com/WileyCDA/Section/JavaScript-DOM-Ranges.id-292301.html)

# When
什么时候要用到range对象

比如说：
* 当我们想要获取到一个用户在页面上选取到的文字信息，最常见的是用户用鼠标选择的内容(user selection)
* 当我们想要往页面中某处插入一段文本
