---
id: data-fields-wallet-orders
title: wallet_orders
---

钱包订单

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| owner_id | int | 记录所属者 |
| target_type | varchar | 目标类型 |
| target_id | varchar | 目标标识 |
| title | varchar | 订单标题 |
| body | text | 订单内容 |
| type | tinyint | 1：入账、-1：支出 |
| amount | int | 订单金额 |
| state | tinyint | 订单状态，0: 等待，1：成功，-1: 失败 |
