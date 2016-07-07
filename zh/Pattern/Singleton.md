一个对象的实例，只有一个

```
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}
```

[Singleton](http://www.dofactory.com/javascript/singleton-design-pattern)
https://cnodejs.org/topic/520dc59899f5db772c01ce1f
