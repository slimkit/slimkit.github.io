# 如何发布后台入口

打开你的 服务提供者，在 boot 方法中如下：

```php

use Zhiyi\Plus\Support\ManageRepository;

public function boot()
{
    $this->app->make(ManageRepository::class)->loadManageFrom('问答应用', 'plus-question::admin', [
        'route' => true,
        'icon' => '问',
    ]);
}
```

`loadManageFrom` 第一个参数是后台导航标题，第二个参数可以是 http 地址，也可以是本地 route name。

第三个是拓展参数，如果你二个参数是本地 route name，那么一定要存在 `route => true`, 否则会当成 http 地址处理，`icon` 字段则是图标地址，或者是图标字符串。
