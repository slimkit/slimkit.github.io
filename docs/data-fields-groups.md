---
id: data-fields-groups
title: groups
---

圈子

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| name | varchar | 圈子名称 |
| user_id | int | 创建者 |
| category_id | int | 分类id |
| location | varchar | 位置 |
| longitude | varchar | 经度 |
| latitude | varchar | 纬度 |
| geo_hash | varchar | 地理位置范围 |
| allow_feed | tinyint | 是否允许发不到动态 |
| mode | varchar | public: 公开，private：私有，paid：付费的 |
| money | int | 如果 mode 为 paid 用于标示收费金额 |
| summary | text | 简介 |
| notice | text | 公告 |
| permissions | varchar | 圈子权限, 1 - 所有-member,administrator,founder、2-圈主和管理员: administrator,founder, 3 - 圈主: founder |
| users_count | int | 成员数量 |
| posts_count | int | 帖子数量 |
| audit | tinyint |  审核状态, 0 - 待审核、1 - 通过、2 - 拒绝 |
