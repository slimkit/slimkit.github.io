---
id: data-fields-group-posts
title: group_posts
---

圈子帖子

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| group_id | int | 圈子id |
| user_id | int | 发帖人 |
| title | varchar | 帖子标题 |
| body | text | 帖子内容```markdown``` |
| summary | varchar | 列表专用字段, 简介 |
| likes_count | int | 点赞统计 |
| comments_count | int | 评论统计 |
| views_count | int | 阅读统计 |
