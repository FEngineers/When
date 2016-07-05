




# 如何使用
## bindings
提供了三种绑定的方式
### '<'
单向绑定，在当前的component里面修改了这个值后，不会影响到parent。
但是如果是修改的object的对象或者数组的元素，那么当前component和parent component都会同时改变

### '＝'
双向绑定

### '@'
当输入的是一个字符串，并且这个值不会被改变

### '&'
输出，提供组件的回调函数


## transclude
component里面还可以插入component

