# CDN - 本地公开

「本地公开」是在 ThinkSNS Plus 中默认的一种方式，主要是便于没有条件的用户简单的拥有储存功能。

## 设置

进入「CDN 管理」，CDN 项选择「文件系统」，然后磁盘选择「本地公开」

## 必要命令

默认情况下，本地公开磁盘是放在 `/storage/app/public` 目录下的，这个目录并非公开目录，你需要实现：

```shell
php artisan storage:link
```

执行完成后会创建一个软链到 `public/storage`。此时就可以通过你的域名访问文件了。
