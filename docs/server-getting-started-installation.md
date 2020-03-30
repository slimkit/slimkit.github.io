---
id: server-getting-started-installation
title: 安装
---

- [环境要求](#manual-need)
- [安装](#install)
<a id="manual-need"></a>
## 环境要求

- [PHP & 拓展](#manual-need-php-ext)
- [PHP 函数](#manual-need-php-functions)
- [数据库](#manual-need-database)

### PHP & 拓展

- PHP 必须大于或等于 7.1.3
- 必须安装扩展 dom
- 必须安装扩展 fileinfo
- 必须安装扩展 gd
- 必须安装扩展 json
- 必须安装扩展 mbstring
- 必须安装扩展 openssl
- 必须安装 PDO
- 使用 MySQL 数据库则必须安装 PHP 扩展 pdo_mysql
- 使用 PostgreSQL 数据库则必须安装 PHP 扩展 pdo_pgsql
- 使用 SQLite 数据库则必须安装 PHP 拓展 pdo_sqlite
- 使用 SQL Server 数据库则必须安装 PHP 拓展 pdo_dblib

<a id="manual-need-php-functions"></a>
### PHP 函数

- `exec`
- `system`
- `scandir`
- `symlink`
- `shell_exec`
- `proc_open`
- `proc_get_status`

> 这些是在 Console 环境下使用的，尽量确保你的系统没有禁止。

<a id="manual-need-database"></a>
### 数据库

- [MySQL](#manual-need-database-mysql)
- [MariaDB](#manual-need-database-mariadb)
- [PostgreSQL](#manual-need-database-pgsql)
- [SQLite](#manual-need-database-sqlite)
- [Microsoft SQL Server](#manual-need-database-sql-server)

> 推荐使用 PostgreSQL。

<a id="manual-need-database-mysql"></a>
##### MySql

使用 MySQL 建议使用 `>=5.7` 版本，必须 `>=5.6` 版本，如果你的是 5.6 版本，则自行解决索引过长导致的 SQL 执行错误问题。

<a id="manual-need-database-mariadb"></a>
##### MariaDB

使用 MariaDB 必须 `>=10.3` 版本，因为只有该版本是建立在 MySQL 5.6 & 5.7 之上的，得以支持 Emoji。

> 使用 MariaDB 按照 MySQL 进行配置即可。

<a id="manual-need-database-pgsql"></a>
##### PostgreSQL

PostgreSQL 数据库天然支持 Emoji，无需任何版本要求，但是我们还是建议使用最新版本的 PostgreSQL 稳定版本的以支持更完善的空间计算。

<a id="manual-need-database-sqlite"></a>
##### SQLite

首先，这个数据库不建议使用，因为这种轻量级的数据库适合在 App 中来解决数据本地化需求，服务器应用场景很小。

> 虽然 ThinkSNS+ 不允许使用 SQLite，但是您仍然可以在系统中使用该数据库，但是例如 Emoji 储存等问题自行解决。

<a id="manual-need-database-sql-server"></a>
##### Microsoft SQL Server

就像不推荐 SQLite 一样，我们同样不推荐 Microsoft SQL Server 除非你确定你的系统不适用 Emoji 那么你可以无顾虑的使用 Microsoft SQL Server 了，因为 Microsoft SQL Server 同样支持 utf8 字符集，却无法支持四位长度的 Emoji 字符。

> ThinkSNS+ 不建议使用 SQL Server，但是你仍然可以在系统中使用，出现的 emoji 存储问题自行解决。

<a id="install"></a>
## 安装

需要软件：

- [Composer](https://getcomposer.org/)

> 之后操作我们拟定目录为 `/var/www`

### 下载 Plus 和相关依赖

```shell
composer create-project zhiyicx/thinksns-plus
```

克隆完成后我们进入 `thinksns-plus` 目录：

### 发布拓展包资源

```shell
php artisan vendor:publish --all
```

### 前端服务器转发配置

配置前端服务器，例如 Nginx、Apache 等。应当将 ThinkSNS Plus 下的 `public` 作为 root 目录。

#### Nginx


如果你使用的是 Nginx，在你的站点配置中加入以下内容，它将会将所有请求都引导到 index.php 前端控制器：

```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

##### Example

```
server {
    listen 443 ssl http2;
    server_name plus.io;
    ssl on;
    ssl_certificate /var/www/public/public.io.crt;
    ssl_certificate_key /var/www/public/public.io.key.unsecure;
    root /var/www/public/public;
    index index.php index.html index.htm;

    location / {
         try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_pass php-upstream;
        fastcgi_index index.php;
        fastcgi_buffers 16 16k;
        fastcgi_buffer_size 32k;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

#### Apache

在 ThinkSNS+ 中，已经在根目录 `/plulic` 中已经提供了 `.htaccess` 文件，其中已经为您配置好了优雅的地址配置。如果在你的 Apache 中不生效或者由其他位置提供配置，请设置：

```
Options +FollowSymLinks
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

#### Caddy

Caddy 是一个小巧精悍的 http 软件，在开发环境，测试环境等下也是我们推荐使用的软件。因为它无需特殊的安装，无需特殊的配置，您只需下载一个 Caddy 运行文件，写一份你的站点配置即可运行。

```
rewrite { 
    to {path} {path}/ /index.php?{query}
}
```


### 目录权限 & 公开资源

大多数时候为了方便，我们在服务器都是使用 `root` 作为服务器管理账户，可能你在下载 ThinkSNS+ 的时候也适用的 `root` 账户，这会产生一个问题，php-fpm 或者 nginx 不是运行在 root 账户下的，导致你实际运行站点的时候会出现莫名其妙的错误，你应该将你整个 `thinksns-plus` 目录指定给 php 或者 nginx 的运行角色：

| 目录 | 权限 |
|:----:|----|
| /* |  0755 |
| /storage | 0777 |

所有资源都存储在 `/storage` 目录下，所以你需要将公开资源链接到 `/public` 目录下，请务必执行：

```shell
php artisan storage:link
```