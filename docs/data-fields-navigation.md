---
id: data-fields-navigation
title: navigation
---

pc导航

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| name | varchar | 导航名称 |
| app_name | varchar | 英文名 |
| url | varchar | 跳转链接 |
| position | tinyint | 导航位置 0-顶部 1-底部 |
| status | tinyint | 状态 0-关闭 1-开启 |
| parent_id | int | 父级导航 |
| order_sort | int | 排序权重 |
