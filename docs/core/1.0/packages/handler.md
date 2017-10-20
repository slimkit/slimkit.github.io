# 处理器

可以把处理理解成一个事件，通过特定指令触发这个处理，可以处理很多微笑需求，通过简单的开发就可以完成一个指令动作的开发。

而所有处理器的前置都是 `php artisan package:handle` 。你执行这个命令，ThinkSNS+ 会为你列出所有的处理器。

在 ThinkSNS+ 创建的包中，已经在 `src/Handlers` 目录中为你生成好了两个默认处理器。

## 创建处理器

你只需要创建一个类，这个类继承 `Zhiyi\Plus\Support\PackageHandler` :

```php
use Zhiyi\Plus\Support\PackageHandler;

class ExamplePackageHandler extends PackageHandler
{
    // todo.
}
```

然后在你的 服务提供者 中，进行注册发布：

```php
use Zhiyi\Plus\Support\PackageHandler;

public function register()
{
    PackageHandler::loadHandleFrom('example', ExamolePackageHandler::class);
}

```

## 实现处理器

创建处理器并注册后，实际你还没有处理器功能。而在处理器中实现处理器只需要 按照 `<name>Handle` 的格式进行写即可：

```php
use Zhiyi\Plus\Support\PackageHandler;

class ExamplePackageHandler extends PackageHandler
{
    public function testHandler($command) {
        // TODO
    }    
}
```

在一个处理器方法中，可以实现多个 handler。注意，每个 handler 的唯一参数是一个 command 实例，所以你可以通过这个参数实现很多事情。你也可以选择不使用。
