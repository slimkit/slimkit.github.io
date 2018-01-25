---
id: server-guides-package
title: 拓展包开发指南
---

在开发 ThinkSNS+ 之前，你应该阅读 《[Laravel 拓展包开发](https://laravel.com/docs/master/packages)》文档，因为 ThinkSNS+ 的拓展包前提是建立在 Laravel 拓展包基础上新增功能。

## 创建拓展包

在 ThinkSNS+ 中已为你准备好了友好的方式来创建你的拓展包，Try it:

```shell
php artisan package:create
```

执行命令，按照提示输入你的信息，你的包就创建好了，而你的包会被储存在 `resource/repositorie/sources` 中。

## 本地模拟打包

当你创建完成你的包后，你一定迫不及待的安装了吧？但是我们还没有发布到 packagist.org 上，如何安装呢？

在 ThinkSNS+ 已经考虑到你在开发过程中希望模拟发布并使用 Composer 安装你的拓展包，你只需要运行：

```shell
php artisan package:archive vendor/name [version]
```

打包完成后，我们会在 `resource/repositorie/zips` 目录下打包完成你的代码。现在，你可以使用 `composer require vendor/name` 来安装你的拓展包了。

## 开发中实时修改

上面我们已经提到，ThinkSNS+ 已经在创建拓展包，模拟打包为大家做好了准备。

可是，当我们开发过程中，不可能修改了后打包，然后再安装，这样很不方便，所以我们也为你准备了一个「软链」命令。

使用这个命令，可以使得你在修改 `resource/repositorie/sources` 内容的时候代码实时生效。我们来看看：

```shell
php artisan package:link <vendor/name>
```

执行这个命令完成后我们就可以实时修改代码了。


## 处理器

可以把处理理解成一个事件，通过特定指令触发这个处理，可以处理很多微笑需求，通过简单的开发就可以完成一个指令动作的开发。

而所有处理器的前置都是 `php artisan package:handle` 。你执行这个命令，ThinkSNS+ 会为你列出所有的处理器。

在 ThinkSNS+ 创建的包中，已经在 `src/Handlers` 目录中为你生成好了两个默认处理器。

### 创建处理器

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

### 实现处理器

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

## 如何发布后台入口

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

