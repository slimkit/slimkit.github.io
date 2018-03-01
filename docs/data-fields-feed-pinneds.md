---
id: data-fields-feed-pinneds
title: feed_pinneds
---

付费动态购买记录

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| channel | varchar | 频道 |
| raw | int |  |
| target | int | 目标id「动态」 |
| user_id | int | 购买用户 |
| target_user | int | 动态作者 |
| amount | bigint | 购买金额 |
| day | int | 购买天数 |
| expires_at | timestamp | 到期时间，固定后设置该时间 |
