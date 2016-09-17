在已有项目里看到一段代码

```
// hack 解决angular-touch 覆盖ng-click 导致阻止默认行为
$provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
  $delegate.shift();
  return $delegate;
}]);
```

其实，用ng已经有一段时间了，竟然从来没有用过这个特性

https://docs.angularjs.org/guide/decorators

被上面的代码坑了一天，痛苦死了...
