---
id: server-guides-configuration
title: 配置管理
---

在 Laravel 中，大多数采用 `.env` 文件管理，深度配置都采用 `config/*.php` 配置。

在 ThinkSNS+ 这一现象并没有发生改变，我们也推崇使用 Laravel 方式进行管理配置，但是有时候我们往往需要后期配置，
但是后期配置不可能期望用户去修改配置文件。这很危险，用户大多都没有技术能力。

所以，在 ThinkSNS+ 在 Laravel 配置的基础上增加了一份更加灵活的配置支持，而类就是 `\Zhiyi\Plus\Support\Configuration` 所处位置： `/app/Support/Configuration.php`。

我们将这个配置称之为 vendor config，而管理清单采用 Yaml 方式，存储在 `.plus.yml` 文件中。

## 获取自定义配置

我们只需要调用 `getConfiguration` 方法即可，注意，这里返回的配置并非 Laravel 系统中的所有配置，而是存储在 `.plus.yml` 的所有配置。

## 获取自定义一级数据

调用 `getConfigurationBase` 方法即可，因为我们通过 vendor 配置的形式对 Laravel 配置进行覆盖，所以我们采用「点分割」式语法，将深层配置，转化为一级数组，来达到对 Laravel 指定深度配置覆盖的目的。

## 保存 vendor 配置

当我们使用「[获取自定义配置](#获取自定义配置)」获取后，其实是一个 `Illuminate\Contracts\Config\Repository` 的类，而你可以使用这个类的方法管理 vendor 配置，当你管理完成后可以传递给 `save` 方法，`save` 方法会自动将其转化为 Yaml 配置文件并持久化。

## 快速设置

采用「保存 vendor 配置」的方法进行操作，还是比较繁琐的，所以支持类中提供了一个快速的设置方法 `set`。

采用这个方法，你可以快速的设置自定义配置。

### 单个配置设置

```php
// \Zhiyi\Plus\Support\Configuration::class
$repository->set('cdn.default', 'filesystem');
```

### 多个配置

```php
// \Zhiyi\Plus\Support\Configuration::class
$repository->set([
    'cdn.default' => 'filesystem',
    'app.name' => 'ThinkSNS+',
]);
```

