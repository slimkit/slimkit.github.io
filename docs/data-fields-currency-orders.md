---
id: data-fields-currency-orders
title: currenc_orders
---

货币订单

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| owner_id | int | 订单所属者 |
| title | varchar | 订单标题 |
| body | text | 订单内容 |
| type | tinyint | 1：入账、-1：支出 |
| target_type | varchar | 操作类型 |
| target_id | int | 目标id |
| currency | int | 货币别名id |
| amount | int | 订单金额 |
| state | tinyint | 订单状态，0: 等待，1：成功，-1: 失败 |
