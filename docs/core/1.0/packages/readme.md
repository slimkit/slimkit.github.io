# 拓展包开发指南

在开发 ThinkSNS+ 之前，你应该阅读 《[Laravel 拓展包开发](https://laravel.com/docs/5.5/packages)》文档，因为 ThinkSNS+ 的拓展包前提是建立在 Laravel 拓展包基础上新增功能。

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

