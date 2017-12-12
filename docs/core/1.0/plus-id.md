# Plus ID

Plus ID 是 ThinkSNS Plus 程序提供的第三方程序接入用户方案，使用简洁的接口可快速降程序整合进入 Plus 程序。

> 请求地址 `/plus-id/clients/{client id}`

- [Serve 安装](#serve-install)
- [接口](#api)
- [签字算法](#sign)
- [SDK](#sdk)

通用签字所需必须参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| app | Integer | 应用 ID. |
| action | String | 如 `auth/login` |
| time | Integer | 签字时间 |

通用请求必须参数：

| 参数 | 描述 |
|:----:|----|
| action | 请求动作 |
| time | 签字时间 |
| sign | 签字 |

> 检查请求地址示例：`http://plus.io/plus-id/clients/1?time=1513068838&sign=00c8aa45b2e85c8238eee0cff658f411&action=auth%2Fresolve`

<a name="serve-install"></a>
## Serve 安装 {#server-install}

首选在 Plus 中运行 `composer require slimkit/plus-id` 

然后执行：

```shell
php artisan package:handle plus-id publish
php artisan package:handle plus-id migrate
php artisan package:handle plus-id db-seed
```

至此，你进入后台在左侧可以看到 Plus ID 导航栏了。

<a name="api"></a>
## 接口 {#api}

- [Auth](#api-auth)
    - [登陆](#api-auth-login)
    - [检查登陆 & 授权登陆](#api-auth-resolve)
- [用户](#api-user)
    - [检查用户](#api-user-check)
    - [创建用户](#api-user-create)
    - [删除用户](#api-user-delete)
    - [获取用户](#api-user-show)
    - [更新用户](#api-user-update)

<a name="api-auth"></a>
### Auth {#api-auth}

认证操作，是基于页面跳转的 Session 状态请求，不可从服务器后端进行。

<a name="api-auth-login"></a>
#### 登陆 {#api-auth-login}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| user | Integer | 需要登陆的 Plus User ID. |
| action | String | `auth/login` |

<a name="api-auth-resolve"></a>
#### 检查登陆和授权登陆 {#api-auth-resolve}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| action | String | `auth/resolve` |

<a name="api-user"></a>
### 用户 {#api-user}

用户操作用于执行用户的增删改差，建议使用服务器进行查询。

<a name="api-user-check"></a>
#### 检查用户 {#api-user-check}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| action | String | `user/check` |

检查用户请求参数：

| 参数 | 描述 |
|:----:|----|
| phone | 用户手机号码 |
| email | 用户邮箱 |
| name | 用户名 |
| user | 用户 ID |

> 以上参数可以符合，最少一项。

<a name="api-user-create"></a>
#### 创建用户 {#api-user-create}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| action | String | `user/create` |

创建用户请求参数：

| 参数 | 描述 |
|:----:|----|
| phone | 用户手机号码 |
| email | 用户邮箱 |
| name | 用户名 |
| password | 用户密码 |

<a name="api-user-delete"></a>
#### 删除用户 {#api-user-delete}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| user | Integer |  Plus User ID. |
| action | String | `user/delete` |

<a name="api-user-show"></a>
#### 获取用户 {#api-user-show}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| user | Integer |  Plus User ID. |
| action | String | `user/delete` |

<a name="api-user-update"></a>
#### 更新用户 {#api-user-update}

签字所需参数：

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| user | Integer |  Plus User ID. |
| action | String | `user/update` |


更新用户数据请求参数：

| 参数 | 描述 |
|:----:|----|
| phone | 用户手机号码 |
| email | 用户邮箱 |
| name | 用户名 |

<a name="sign"></a>
## 签字算法 {#sign}

php版本算法：

```php
$key = '00c8aa45b2e85c8238eee0cff658f411';
$action = [
    'app' => i,
    'action' => 'user/check',
    'time' => 1513068658,
];
ksort($action);
$action = json_encode($action);
$sign = md5(hash_hmac('sha256', $action, $key, true));
```

<a name="sdk"></a>
## SDK {#sdk}

在提供集成 API 的情况下，我们也提供快速集成的方法。

你可以在你的程序中使用 sdk:

PHP 版本：

```shell
composer require slimkit/plus-id-sdk
```

Example:

```php
$app = 2;
$key = '00c8aa45b2e85c8238eee0cff658f411';
$serve = 'http://plus.io/plus-id/clients/'.$app;

$client = new SlimKit\PlusID\Client\Client($app, $key, $serve);

$user = 1;
$login = new SlimKit\PlusID\Client\Auth\Login($client, $user);

echo $login->getURI();
```
